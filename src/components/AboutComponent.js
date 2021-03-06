import React from 'react'
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardTitle, CardText, CardHeader, Media } from 'reactstrap'
import { Link } from 'react-router-dom'

function RenderLeader({ leaders }) {
    let leadersList = leaders.map((leader) => {
        return (

            <div className="row">

                <Media object src={leader.image} width={100} height={100} alt={leader.name} />
                <Media body>
                    <div className="col-12">
                        <Media heading> {leader.name}</Media>
                        <p>{leader.designation}</p>
                        <p>{leader.description}</p>
                    </div>
                </Media>

            </div>
        )
    })
    return (
        <div className="col-12">
            <Media list>
                {leadersList}
            </Media>

        </div>

    )
}

function About(props) {

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active> About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h4>About US</h4>
                    <hr />
                </div>
            </div>

            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h3>Our History</h3>
                    <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world,
                    you never know what will arrive on your plate the next time you visit us.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">3 Feb. 2013</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">HK Fine Foods Inc.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">40</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">You better cut the pizza in four pieces because
                                    I'm not hungry enough to eat six.</p>
                                <footer className="blockquote-footer" > Yogi Berra,
                                        <cite title="Source Title">
                                        The Wit and Wisdom of Yogi Berra,
                                        P. Pepe, Diversion Books, 2014
                                        </cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Corporate Leadership</h2>
                </div>
                <RenderLeader leaders={props.leaders} />
            </div>
        </div>
    )
}

export default About
