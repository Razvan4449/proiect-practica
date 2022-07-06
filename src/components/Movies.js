import React from 'react'
import { Row, Col, Card} from 'react-bootstrap'
import Data from '../json-data/movies.json'
import ReactStars from "react-rating-stars-component"


function Movies() {
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
                activeColor="#ffd700" />
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

export default Movies