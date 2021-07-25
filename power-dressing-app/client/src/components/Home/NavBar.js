import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, Container, Col } from 'react-bootstrap'


const NavBar = () => {

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Col md={5}>
            <LinkContainer to='/'>
              <Navbar.Brand href="#home">Power Dressing </Navbar.Brand>
            </LinkContainer>
          </Col>
          <Col md={5}>
            <Nav className="me-auto">
              {/* 
                <Nav.Link href="#home">Home</Nav.Link>
              </LinkContainer> */}
              <LinkContainer to='/outfits'>
                <Nav.Link href="#features"> Browse Outfits</Nav.Link>
              </LinkContainer>
            </Nav>
          </Col>
          <Col>
            <LinkContainer to='/basket'>
              <Nav.Link href="#pricing">Bag</Nav.Link>
            </LinkContainer>
          </Col>
        </Container>
      </Navbar>

    </>
  )
}

export default NavBar