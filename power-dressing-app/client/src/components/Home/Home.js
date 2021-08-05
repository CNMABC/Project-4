import React from 'react'
import { Container, Col, Row, Button, Nav } from 'react-bootstrap'
import Typewriter from 'typewriter-effect'
import { LinkContainer } from 'react-router-bootstrap'




const Home = () => {
  return (
    <>
      <div className="home">
        <Container fluid>
          <div className='hero-title'>
            <Row>
              <Col xs={3}></Col>
              <Col xs={7}>
                <Typewriter
                  options={{
                    className: 'hero-title', strings: ['You are powerful', 'Wear confidence', 'You are beautiful', 'Be who you want', 'You are strong', 'Dream big', 'You are not an imposter', 'You are brave'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Col>
              <Col></Col>
            </Row>
          </div>
        </Container>
        <div className="middle-area-home">
        </div>
      </div>
      <div className="home-second-part">
        <h6 className="text-center hero-under-text">Clothes for womxn who want to inspire and create change</h6>
      </div>
      <div className="text-center">
        <LinkContainer to="/outfits/">
          <Nav.Link><Button variant="outline-dark" >Show me more</Button></Nav.Link>
        </LinkContainer>
      </div>


    </>
  )
}

export default Home
