// import React, { Component } from 'react';
// import { Card, CardTitle, CardBody, CardImg, CardImgOverlay, CardText } from 'reactstrap'

// class DishDetail extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {

//         }
//     }

//     renderDish = (selectedDish) => {
//         if (selectedDish !== undefined && selectedDish !== null) {
//             return (
//                 <Card>
//                     <CardImg top src={selectedDish.image} alt={selectedDish.name} />
//                     <CardBody>
//                         <CardTitle> {selectedDish.name}</CardTitle>
//                         <CardText>{selectedDish.description}</CardText>
//                     </CardBody>

//                 </Card>

//             )
//         }
//         else {
//             return (<div></div>)
//         }
//     }

//     renderComments = (selectedDish) => {
//         if (selectedDish !== undefined && selectedDish !== null && selectedDish.comments !== undefined && selectedDish.comments != null) {
//             let dishComments = selectedDish.comments.map((comment) => {
//                 return (
//                     <div>
//                         <h5>{comment.comment}</h5>
//                         <h6>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</h6>
//                     </div>
//                 )
//             })

//             return (
//                 <div>
//                     <h4>Comments</h4>
//                     {dishComments}
//                 </div>
//             )

//         }
//         else {
//             return (<div></div>)
//         }

//     }


//     render() {
//         return (
//             <div className="container">
//                 <div className="col-12 col-md-5 m-1">
//                     {this.renderDish(this.props.selectedDish)}
//                 </div>
//                 <div className="col-12 col-md-5 m-1">
//                     {
//                         this.renderComments(this.props.selectedDish)
//                     }
//                 </div>
//             </div>
//         )
//     }
// }

// export default DishDetail

//---------convert as functiona component----------------

import React from 'react';
import { Card, CardTitle, CardBody, CardImg, CardImgOverlay, CardText, Breadcrumb, BreadcrumbItem, Button, Modal, ModalBody, ModalHeader, Row, Label, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Control, LocalForm, Errors,Form } from 'react-redux-form'
import { Loading } from './LoadingComponent'


const RenderDish = ({ selectedDish }) => {
    if (selectedDish !== undefined && selectedDish !== null) {
        return (
            <Card>
                <CardImg top src={selectedDish.image} alt={selectedDish.name} />
                <CardBody>
                    <CardTitle> {selectedDish.name}</CardTitle>
                    <CardText>{selectedDish.description}</CardText>
                </CardBody>

            </Card>

        )
    }
    else {
        return (<div></div>)
    }
}


export class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModelOpened: false
        }
    }
    maxLength = (len) => (val) => !(val) || (val.length <= len);
    minLength = (len) => (val) => val && (val.length >= len)
    toggleModal = () => {
        this.setState({ isModelOpened: !this.state.isModelOpened })
    }

    hadleSubmit = (values) => {
        this.toggleModal()
        this.props.addComment(this.props.dishId, values.rating, values.yourname, values.comment)

    }


    render() {
        return (
            <>
                <Button outline onClick={this.toggleModal} ><span className="fa fa-pencil"></span>Submit Comment</Button>
                <Modal isOpen={this.state.isModelOpened} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Commit</ModalHeader>
                    <ModalBody>
                        <LocalForm
                            onSubmit={(values) => this.hadleSubmit(values)}
                        >
                            <Row className="form-group">
                                <Label htmlFor="rating" md={2}>Rating</Label>
                                <Col>
                                    <Control.select model=".rating" id="rating" name="rating">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">

                                <Label htmlFor="yourname" md={2}>Your Name </Label>
                                <Col>
                                    <Control.text
                                        model=".yourname" id="yourname" name="yourname"
                                        placeholder="Your Name"
                                        validators={{
                                            maxLength: this.maxLength(15),
                                            minLength: this.minLength(3)
                                        }}
                                    />
                                    <Errors
                                        model=".yourname"
                                        show="touched"
                                        className="text-danger"
                                        messages={{
                                            minLength: 'Must be greater than 2 charcters',
                                            maxLength: 'Must be 15 charcters or less'
                                        }}

                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="comment" md={2}>Comment</Label>
                                <Col>
                                    <Control.textarea
                                        model=".comment"
                                        id="comment"
                                        name="comment"
                                        rows="6"
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col md={2}>
                                    <Button type="submit" color="primary">Submit</Button>
                                </Col>
                            </Row>

                        </LocalForm>

                    </ModalBody>
                </Modal>
            </>)
    }
}


const RenderComments = ({ comments, addComment, dishId }) => {
    if (comments !== undefined && comments != null) {
        let dishComments = comments.map((comment) => {
            return (
                <div>
                    <h5>{comment.comment}</h5>
                    <h6>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</h6>
                </div>
            )
        })

        return (
            <div>
                <h4>Comments</h4>
                {dishComments}
                <CommentForm addComment={addComment} dishId={dishId} />
            </div>
        )


    }
    else {
        return (<div></div>)
    }

}

const DishDetail = (props) => {
    if (props.dishesLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>

            </div>
        )
    }
    else if (props.errorMessage) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errorMessage}</h4>

                </div>
            </div>
        )
    }
    else if (props.selectedDish !== null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.selectedDish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.selectedDish.name}</h3>

                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish selectedDish={props.selectedDish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {
                            <RenderComments comments={props.comments} addComment={props.addComment} dishId={props.selectedDish.id} />
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default DishDetail