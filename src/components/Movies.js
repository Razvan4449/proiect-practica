import React from 'react'
import { Container, Row, Col, Card} from 'react-bootstrap'
import Data from '../json-data/home.json'

function Movies() {
  return (
    <Container>
    <Row>
          {Data &&
            Data.map((item) => (
              <Col key={item.ID} sm={4}>
                <Card>
                  <Card.Img variant="top" src={item.Image} />
                  <Card.Body>
                  <Card.Title>{item.Name}</Card.Title>  
                  </Card.Body>
                </Card>
                <br />
              </Col>
            ))}
        </Row>
    </Container>
  )
}

export default Movies