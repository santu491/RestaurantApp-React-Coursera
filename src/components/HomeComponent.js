import React from 'react'
import { Card, CardBody, CardImg, CardText, CardTitle, CardSubtitle } from 'reactstrap'
import { Loading } from './LoadingComponent'

function RenderCardItem({ item, isLoading, errorMessage }) {

    if (isLoading) {
        return (
            <Loading />
        )
    }
    else if (errorMessage) {
        return (
            <h4>{errorMessage}</h4>
        )
    }
    else {
        return (
            <div>
                <Card>
                    <CardImg src={item.image} alt={item.name} />
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                        <CardText>{item.description}</CardText>
                    </CardBody>

                </Card>
            </div>
        )
    }
}

function Home(props) {
    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    {<RenderCardItem item={props.dish}
                        isLoading={props.dishesLoading}
                        errorMessage={props.dishesErrorMessage}
                    />}
                </div>
                <div className="col-12 col-md m-1">
                    {<RenderCardItem item={props.promotion} />}
                </div>
                <div className="col-12 col-md m-1">
                    {
                        <RenderCardItem item={props.leader} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Home