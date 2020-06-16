import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Footer = (props) => {
    return (
        <div className="footer">
            <div className="container" >
                <div className="row justify-content-center">
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li> <Link to='/home'> Home</Link></li>
                            <li> <Link to='/aboutus'> About Us</Link></li>
                            <li><Link to='/menu'> Menu</Link> </li>
                            <li><Link to='/contactus'> Contact Us</Link> </li>
                        </ul>
                    </div>

                    <div className="col-7 col-sm-5">
                        <h5>Our Address</h5>
                        <address>
                            Narsingapali (Vill & po)<br />
                    Tekkali(Mandal),<br />
                    Srikakulam(Dist.)<br />
                    Andhra Pradesh-532201<br />
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-google"> <i className="fa fa-google-plus"></i></a>
                            <a className="btn btn-social-icon btn-facebook"><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-linkedin"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-twitter"><i className="fa fa-twitter"></i></a>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>@ Copyright 2018 Ristorante confusion</p>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Footer