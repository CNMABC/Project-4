import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Typewriter from 'typewriter-effect'



const Home = () => {
  return (
    <>

      <Container fluid>
        <div className='hero-title'>
          <Row>
            <Col xs={4}></Col>
            <Col xs={7}>
              <Typewriter
                options={{
                  className: 'hero-title', strings: ['You are powerful', 'Dress in confidence', 'You are beautiful', 'Be who you want', 'You are strong', 'Dream big', 'You are brave'],
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
        <Container>
          <Row>
            <Col>1 of 2</Col>
            <Col>2 of 2</Col>
          </Row>
          <Row>
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
          </Row>
          <Row>
            <Col>1 of 2</Col>
            <Col>2 of 2</Col>
          </Row>
          <Row>
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Home
