import React from "react";
import { Card } from "react-bootstrap";
import StarRatingComponent from 'react-star-rating-component';

const Movielist = (props) => {
    return <div className="Movielist">
        {props.movies.map(el => <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={el.image} />
            <Card.Body>
                <Card.Title>{el.moviename}</Card.Title>
                <Card.Text>{el.description}</Card.Text>
                <StarRatingComponent value={el.rating} starCount={10} />
            </Card.Body>
        </Card>)}
    </div>
}
export default Movielist