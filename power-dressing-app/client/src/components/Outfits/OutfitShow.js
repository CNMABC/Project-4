import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Button, Accordion } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'



const OutfitShow = () => {
  const [outfit, setOutfit] = useState({})
  const [hasError, setHasError] = useState(false)
  const { id } = useParams()


  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/outfits/${id}`)
        setOutfit(data)
      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, [id])

  console.log('outfit', outfit)

  return (

    <Container fluid className="container-show-card">
      <div className="header-outfit-show" >
        <h1 className="text-center">{outfit.title}</h1>
      </div >
      {outfit ?
        <Row>
          <Col sm={6}>
            <div className="text-center">
              <img src={outfit.image} alt={outfit.title} />
              <p>{outfit.quote}</p>
              <p>{outfit.detail}</p>
            </div>
          </Col>
          <Col sm={6}>
            <div className="text-center" >
              <p>{outfit.item_1}</p>
              <img src={outfit.image_1} alt={outfit.title} />
              <h3 className="price">£{outfit.price_1}.00</h3>
              <div className="accordion-header">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Details</Accordion.Header>
                    <Accordion.Body>
                      <p>{outfit.description}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <LinkContainer to='/basket'>
                <Button variant="info" size="lg">Buy Outfit</Button>
              </LinkContainer>
            </div>
          </Col>
        </Row>
        :
        <h2 className="title has-text-centered">
          {hasError ? 'Oh something went wrong ' : '...loading '}</h2>
      }
    </Container >
  )
}

export default OutfitShow