import React from 'react'
import { Container, Row, Col, Card, Carousel} from 'react-bootstrap'
import Data from '../json-data/home.json'

function Home() {
  return (
    <div className='home-container'>

    <Carousel>
    {Data &&
      Data.map((item) => (
        <Carousel.Item key={item.ID} interval={3000}>
        <img
        className="d-block w-50 m-auto h-10"
        src={item.Image}
        alt={item.Name}
      />
        <Carousel.Caption>
        <h3>{item.Name}</h3>
      </Carousel.Caption>
      </Carousel.Item>
      ))}
   </Carousel>
    </div>
  )
}

export default Home