import React, { Component } from 'react'
import { Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, Collapse, NavItem, Col, Modal, ModalBody, ModalHeader, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'


class Header extends Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this)
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this)
        this.handleLoggin=this.handleLoggin.bind(this)
    }

    toggleNav = () => {
        this.setState({ isNavOpen: !this.state.isNavOpen })
    }

    toggleModal = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen })
    }

    handleLoggin=(event)=>{
        this.toggleModal();
        alert("username:"+this.username.value+ " password:"+this.password.value +" Remember:"+this.remember.checked)
        event.preventDefault();
    }

    render() {
        return (
            <>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height='30' width='40' alt="Ristorante Con Fusion" /></NavbarBrand>

                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink to="/home" className="nav-link"><span className="fa fa-home fa-lg"></span>Home</NavLink>

                                </NavItem>

                                <NavItem>
                                    <NavLink to="/aboutus" className="nav-link"><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/menu"><span className="fa fa-list fa-lg"></span>Menu</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg">Contact Us</span>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span>Login</Button>
                            </NavItem>
                        </Nav>
                    </div>
                </Navbar >
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante confusion</h1>
                                <p>Customers are not coming to restaurant due to carono virus</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLoggin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                innerRef={(input)=>this.username=input}
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" 
                                innerRef={(input)=>this.password=input}
                                />
                            </FormGroup>

                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input)=>this.remember=input}
                                    /> Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>

                        </Form>

                    </ModalBody>
                </Modal>
            </>
        )
    }
}

export default Header