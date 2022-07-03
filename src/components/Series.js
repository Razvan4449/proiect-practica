import React from 'react'
import Data from '../json-data/series.json'
import {Col, Card, Row, Tabs, Tab} from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import CardHeader from 'react-bootstrap/esm/CardHeader';

function Series() {

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
   <div className='series-container'>
   <Row>
   {Data &&
    Data.map((item) => (
      <Col key={item.ID} sm={4}>
        <Card>
          <Card.Img variant="top" src={item.Image} />
          <Card.Body>
          <Card.Title>{item.Name}</Card.Title>
          <Card.Text>{item.Text}</Card.Text>
           <Card.Footer>
           <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700" />,
            </Card.Footer>
          </Card.Body>
        </Card>
        <br />
      </Col>
    ))}
    </Row>
    </div>
    
  )
}

export default Series