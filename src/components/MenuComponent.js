// import React, { Component } from 'react'
// import DishDeatilComponent from './DishDetailComponent'
// // import { Media } from 'reactstrap'

// import { Card, CardTitle, CardBody, CardImg, CardImgOverlay, CardText } from 'reactstrap'

// class Menu extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             selectedDish: null
//         }
//     }


//     onSelectedDish = (dish) => {
//         this.setState({ selectedDish: dish })
//     }

//     render() {
//         // let menu = this.props.dishes.map((dish) => {
//         //     return (
//         //         <div key={dish.id} className="col-12 mt-5">
//         //         <Media tag="li">
//         //             <Media left middle>
//         //                 <Media object src={dish.image} alt={dish.name} />
//         //             </Media>
//         //             <Media body className="ml-5">
//         //                 <Media heading> {dish.name}</Media>
//         //                 <p>{dish.description}</p>
//         //             </Media>
//         //         </Media>
//         //         </div>
//         //     )
//         // })

//         let menu = this.props.dishes.map((dish) => {
//             return (
//                 <div className="col-12 col-md-5 m-1">
//                     <Card key={dish.id} onClick={() => this.onSelectedDish(dish)}>
//                         <CardImg width="100%" src={dish.image} alt={dish.name} />
//                         <CardImgOverlay>
//                             <CardText > {dish.name}</CardText>
//                         </CardImgOverlay>
//                     </Card>
//                 </div>
//             )
//         })
//         return (
//             <div className="container">
//                 <div className="row">
//                     {/* <Media list>
//                         {menu}
//                     </Media> */}

//                     {menu}
//                 </div>
//                 <div >
//                     <DishDeatilComponent selectedDish={this.state.selectedDish} />
//                 </div>
//             </div>
//         );
//     }
// }

// export default Menu;

//--------2nd Week=---------------

// import React, { Component } from 'react'
// import { Card, CardTitle, CardBody, CardImg, CardImgOverlay, CardText } from 'reactstrap'

// class Menu extends Component {
//     render() {
//         let menu = this.props.dishes.map((dish) => {
//             return (
//                 <div className="col-12 col-md-5 m-1">
//                      <Card key={dish.id} onClick={()=>this.props.onSelectedDish(dish.id)}>
//                         <CardImg width="100%" src={dish.image} alt={dish.name} />
//                         <CardImgOverlay>
//                             <CardText > {dish.name}</CardText>
//                         </CardImgOverlay>
//                     </Card>
//                 </div>
//             )
//         })
//         return (
//             <div className="container">
//                 <div className="row">
//                     {menu}
//                 </div>
//             </div>
//         );
//     }
// }

// export default Menu;


//-----------Convert as functional component--------------------

import React, { Component } from 'react'
import { Card, CardTitle, CardBody, CardImg, CardImgOverlay, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Loading } from './LoadingComponent'

function RenderMenuItem({ dish }) {
    return (
        <Card key={dish.id} >
            <Link to={`/menu/${dish.id}`}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardText > {dish.name}</CardText>
                </CardImgOverlay>
            </Link>
        </Card>
    )
}


const Menu = (props) => {
    let menu = props.dishes.map((dish) => {


        return (
            <div className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} />
            </div>
        )

    })
    
    if (props.dishesLoading) {
        return (
            <Loading />
        )
    }
    else if (props.dishesErrorMessage !== null) {
        return (
            <h4>{props.dishesErrorMessage}</h4>
        )

    }
    else {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem> <Link to="/home">Home</Link> </BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
}

export default Menu;



