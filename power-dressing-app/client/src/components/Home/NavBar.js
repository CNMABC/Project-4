import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, Container, Col } from 'react-bootstrap'


const NavBar = () => {

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Col>
            <Navbar.Brand href="#home">Power Dressing </Navbar.Brand>
          </Col>
          <Col>
            <Nav className="me-auto">
              <LinkContainer to='/'>
                <Nav.Link href="#home">Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/outfits'>
                <Nav.Link href="#features"> Browse Outfits</Nav.Link>
              </LinkContainer>
            </Nav>
          </Col>
          <Col>
            <LinkContainer to='/basket'>
              <Nav.Link href="#pricing">Basket</Nav.Link>
            </LinkContainer>
          </Col>
        </Container>
      </Navbar>

    </>
  )
}

export default NavBar
