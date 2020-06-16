import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap'
import Menu from './MenuComponent'
import { DISHES } from '../shared/dishes'
import DishDeatilComponent from './DishDetailComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'
import Contact from './ContactComponent'
import About from './AboutComponent'

import { connect } from 'react-redux'

import {actions} from 'react-redux-form'

import {addComment,fetchDishes } from '../redux/ActionCreator'

import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    onSelectedDish = (dishID) => {
        this.setState({ selectedDish: dishID })
    }

    componentDidMount(){
        this.props.fetchDishes()
    }


    render() {
        const HomePage = () => {
            return (
                <Home
                    dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.props.promotions.filter((promotion) => promotion.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrorMessage={this.props.dishes.errorMessage}
                />
            )
        }
        const DishWithId = ({ match }) => {
            return (
                <DishDeatilComponent selectedDish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                    addComment={this.props.addComment}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrorMessage={this.props.dishes.errorMessage}

                />
            )

        }

        const AboutUs = () => {
            return (
                <About leaders={this.props.leaders} />
            )

        }
        return (
            <div >
                <Header />
                {/* <Home/> */}
                {/* <Menu dishes={this.props.dishes} onSelectedDish={(dishID) => this.onSelectedDish(dishID)} />
                <DishDeatilComponent selectedDish={this.props.dishes.filter((dish) => dish.id === this.props.selectedDish)[0]} /> */}

                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes.dishes} onSelectedDish={(dishID) => this.onSelectedDish(dishID)}
                        dishesLoading={this.props.dishes.isLoading}
                        dishesErrorMessage={this.props.dishes.errorMessage}
                    />} />
                    <Route path="/menu/:dishId" component={DishWithId} />
                    <Route exact path="/contactus" component={()=><Contact resetFormFeedBack={this.props.resetFormFeedBack} />} />
                    <Route exact path="/aboutus" component={AboutUs} />
                    <Redirect to="/home" />
                    {/* <Redirect to="/contactus" /> */}

                </Switch>
                <Footer />
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        leaders: state.leaders,
        promotions: state.promotions
    }
}

const mapDispatchToProps=(dispatch)=>({
    addComment:(dishId,rating,author,comment)=>dispatch(addComment(dishId,rating,author,comment)),
    fetchDishes:()=>dispatch(fetchDishes()),
    resetFormFeedBack:()=>{dispatch(actions.reset('feedback'))}
})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));


