import React from 'react'
import { Row, Col, Button, Container } from 'react-bootstrap'

const FilterOutfit = () => {



  return (
    <div className="filter-index-page">
      <Container>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col className="column-index"><Button variant="outline-info" value="Coat">Coat</Button></Col>
          <Col className="column-index"><Button variant="outline-info">Dress</Button></Col>
          <Col className="column-index"><Button variant="outline-info">Jumpsuit</Button></Col>
          <Col className="column-index"><Button variant="outline-info">Skirt</Button></Col>
          <Col className="column-index"><Button variant="outline-info">Top</Button></Col>
          <Col className="column-index"><Button variant="outline-info">Trousers</Button></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  )
}

export default FilterOutfit