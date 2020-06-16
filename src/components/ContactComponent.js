// import React, { Component } from 'react'
// import { Form, FormGroup, Button, Label, Input, Col,FormFeedback } from 'reactstrap'

// class Contact extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {

//             firstname: '',
//             lastname: '',
//             telnum: '',
//             email: '',
//             agree: false,
//             contactType: 'Tel.',
//             message: '',
//             touched:{
//                 firstname:false,
//                 lastname:false,
//                 telnum:false,
//                 email:false
//             }
//         }
//         this.handleInputChange=this.handleInputChange.bind(this)
//         this.handleSubmit=this.handleSubmit.bind(this)

//     }

//     handleInputChange=(event)=>{

//         const target=event.target
//         const value=target.type==="checkbox"?target.checked:target.value
//         const name=target.name
//         this.setState({
//             [name]:value
//         });
//     }

//     handleSubmit=(event)=>{

//         console.log('current state is' +JSON.stringify(this.state))
//       alert('current state is' +JSON.stringify(this.state))
//       event.preventDefault()


//     }

//     handleBlur=(field)=>(evt)=>{
//         this.setState({touched:{...this.state.touched,[field]:true}})
//     }

//     validate(firstname,lastname,telnum,email){
//         const error={
//             firstname:'',
//             lastname:'',
//             email:'',
//             telnum:'',
//         };

//         if(this.state.touched.firstname && firstname.length<3){
//             error.firstname='First name should be >=3 charcters'
//         }
//        else if(this.state.touched.firstname && firstname.length>10){
//             error.firstname='First name should be <=10 charcters'
//         }
//         if(this.state.touched.lastname && lastname.length<3){
//             error.lastname='last name should be >=3 charcters'
//         }
//        else if(this.state.touched.lastname && lastname.length>10){
//             error.lastname='last name should be <=10 charcters'
//         }

//         const reg = /^\d+$/;
//         if(this.state.touched.telnum && !reg.test(telnum)){
//             error.telnum = 'Tel. Number should contain only numbers';
//         }

//         if(this.state.touched.email && email.split('').filter(x=>x==='@').length !=1){
//             error.email="email should contain a @"
//         }
//         return error;
//     }

//     render() {
//         let errors=this.validate(this.state.firstname,this.state.lastname,this.telnum,this.state.email)
//         return (
//             <div className="container">
//                 <div className="row row-content">
//                     <div className="col-12">
//                         <h3>Location Information</h3>
//                     </div>
//                     <div className="col-12 col-sm-4 offset-sm-1">
//                         <h5>Our Address </h5>
//                         <address style={{ color: "blue" }}>
//                             D.No-1-3,Narsingapalli<br />
//                     Tekkali(mandal)<br />
//                     Andhara pradesh-532201<br />
//                             <i className="fa fa-phone"></i>:+7981695440<br />
//                             <i className="fa fa-fax"></i>: +850037857<br />
//                             <i className="fa fa-envelope"></i>:<a href="mailto:confusion@food.net">consusion@food.net</a>
//                         </address>
//                     </div>

//                     <div className="col-12 col-sm-6 0ffset-sm-1">
//                         <h5>Map of our Location</h5>
//                     </div>

//                     <div className="col-12 c0l-sm-11 offset-sm-1">
//                         <div className="btn-group" role="group">
//                             <a role="button" className="btn btn-primary"><i className="fa fa-phone"></i> Call</a>
//                             <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
//                             <a role="button" className="btn btn-success"><i className="fa fa-envelope-o"></i> Email</a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="row row-content">
//                     <div className="col-12">
//                         <h3>Send us your feedback</h3>
//                     </div>
//                     <div className="col-12 col-md-9">
//                         <Form onSubmit={this.handleSubmit}>
//                             <FormGroup row>
//                                 <Label htmlFor="firstname" md={2}>First Name</Label>
//                                 <Col md={10}>
//                                     <Input type="text" id="firstname" name="firstname" 
//                                     value={this.state.firstname} 
//                                     placeholder="First Name"
//                                     valid={errors.firstname===''}
//                                     invalid={errors.firstname !== ''}
//                                     onBlur={this.handleBlur('firstname')}
//                                     onChange={this.handleInputChange} />
//                                     <FormFeedback>{errors.firstname}</FormFeedback>
//                                 </Col>

//                             </FormGroup>
//                             <FormGroup row>
//                                 <Label htmlFor="lastname" md={2}>Last Name</Label>
//                                 <Col md={10}>
//                                     <Input type="text" id="lastname" name="lastname" value={this.state.lastname} 
//                                     placeholder="Last Name"
//                                   valid={errors.lastname===''}
//                                   invalid={errors.lastname !== ''}
//                                     onBlur={this.handleBlur('lastname')}
//                                     onChange={this.handleInputChange}
//                                     />
//                                       <FormFeedback>{errors.lastname}</FormFeedback>
//                                 </Col>
//                             </FormGroup>

//                             <FormGroup row >
//                                 <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
//                                 <Col md={10}>
//                                     <Input type="tel" id="telnum" name="telnum" value={this.state.telnum}
//                                     placeholder="Tel. number"
//                                     valid={errors.telnum===''}
//                                     invalid={errors.telnum !== ''}
//                                     onBlur={this.handleBlur('telnum')}
//                                     onChange={this.handleInputChange}
//                                     />
//                                       <FormFeedback>{errors.telnum}</FormFeedback>
//                                 </Col>
//                             </FormGroup>

//                             <FormGroup row>
//                                 <Label htmlFor="email" md={2}>Email</Label>
//                                 <Col>
//                                     <Input type="email" id="email" name="email"
//                                         value={this.state.email}
//                                         placeholder="Email"
//                                         valid={errors.email===''}
//                                         invalid={errors.email !== ''}
//                                         onBlur={this.handleBlur("email")}
//                                         onChange={this.handleInputChange}
//                                     />
//                                       <FormFeedback>{errors.email}</FormFeedback>
//                                 </Col>
//                             </FormGroup>

//                             <FormGroup row>
//                                 <Col md={{ size: 6, offset: 2 }}>
//                                     <FormGroup check>
//                                         <Col>
//                                             <Label check><Input type="checkbox" name="agree" checked={this.state.agree} />{''}<strong>May we contact you?</strong></Label>

//                                         </Col>
//                                     </FormGroup>
//                                 </Col>
//                                 <Col md={{ size: 3, offset: 1 }}>
//                                     <Input type="select" name="contactType" value={this.state.contactType} 
//                                     onChange={this.handleInputChange}
//                                     >

//                                         <option>Tel.</option>
//                                         <option>Email</option>
//                                     </Input>
//                                 </Col>
//                             </FormGroup>
//                             <FormGroup>
//                             <Label htmlFor="message" md={2}>Your Feedback</Label>
//                             <Col md={10}>
//                             <Input type="textarea" id="message" name="message" rows="12" value={this.state.message} 
//                             onChange={this.handleInputChange}
//                             />
//                             </Col>
//                             </FormGroup>

//                             <FormGroup row>
//                                 <Col md={{size:10,offset:2}}>
//                                 <Button type="submit" color="primary">Send Feedback</Button>
//                                 </Col>
//                             </FormGroup>
//                         </Form>
//                     </div>
//                     </div>
//                 </div>


//         )
//     }
// }

// export default Contact

//-------- Week-3----------------

import React, { Component } from 'react'
import {  FormGroup, Button, Label, Input, Col, FormFeedback, Row } from 'reactstrap'
import { Control,  Errors,Form } from 'react-redux-form'

const required=(val)=>val && val.length;
const maxLength=(len)=>(val)=> !(val) || (val.length<=len)
const minLength=(len)=>(val)=>  val && (val.length>=len)
const isNumber=(val)=> !isNaN(Number(val))
const validEmail=(val)=> /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)

class Contact extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleSubmit = (values) => {
        console.log('current state is' + JSON.stringify(values))
        alert('current state is' + JSON.stringify(values))
        this.props.resetFormFeedBack()
        // event.preventDefault()
    }



    render() {
        return (
            <div className="container">
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address </h5>
                        <address style={{ color: "blue" }}>
                            D.No-1-3,Narsingapalli<br />
                    Tekkali(mandal)<br />
                    Andhara pradesh-532201<br />
                            <i className="fa fa-phone"></i>:+7981695440<br />
                            <i className="fa fa-fax"></i>: +850037857<br />
                            <i className="fa fa-envelope"></i>:<a href="mailto:confusion@food.net">consusion@food.net</a>
                        </address>
                    </div>

                    <div className="col-12 col-sm-6 0ffset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>

                    <div className="col-12 c0l-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us your feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form model="feedback"  onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="from-group">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" name="firstname"

                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required,minLength:minLength(3),maxLength:maxLength(15)
                                        }}
                                       
                                    />
                                    <Errors 
                                    className="text-danger"
                                    model=".firstname"
                                    show="touched"
                                    messages={{
                                        required:'Required',
                                        minLength:'Must be greater than 2 charcters',
                                        maxLength:'Must be 15 charcters or less'
                                    }}
                                    />


                                </Col>

                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        className="form-control"
                                        validators={{
                                            required,minLength:minLength(3),maxLength:maxLength(15)
                                        }}
                                    />
                                     <Errors 
                                    className="text-danger"
                                    model=".lastname"
                                    show="touched"
                                    messages={{
                                        required:'Required',
                                        minLength:'Must be greater than 2 charcters',
                                        maxLength:'Must be 15 charcters or less'
                                    }}
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group" >
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" name="telnum"
                                        placeholder="Tel. number"
                                        className="form-control"
                                        validators={{
                                            required,minLength:minLength(3),maxLength:maxLength(15),isNumber
                                        }}
                                    />
                                      <Errors 
                                    className="text-danger"
                                    model=".telnum"
                                    show="touched"
                                    messages={{
                                        required:'Required',
                                        minLength:'Must be greater than 2 charcters',
                                        maxLength:'Must be 15 charcters or less',
                                        isNumber:"Must be a number"
                                    }}
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col>
                                    <Control.text model=".email" id="email" name="email"
                                        className="form-control"
                                        placeholder="Email"
                                        validators={{
                                            required,validEmail
                                        }}

                                    />
                                    <Errors 
                                    className="text-danger"
                                    model=".email"
                                    show="touched"
                                    messages={{
                                        required:'Required',
                                        validators:'Invalid Email Address',
                                       
                                    }}
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col md={{ size: 6, offset: 2 }}>
                                    <div className="from-check">
                                        <Label check><Control.checkbox model=".agree" name="agree" />{''}<strong>May we contact you?</strong></Label>
                                    </div>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Control.select model=".contactType" name="contactType"
                                        className="form-control"
                                    >

                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message" rows="12"
                                        className="form-control"
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">Send Feedback</Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>


        )
    }
}

export default Contact