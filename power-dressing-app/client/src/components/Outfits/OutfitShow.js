import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Button, Accordion } from 'react-bootstrap'
// import { LinkContainer } from 'react-router-bootstrap'



const OutfitShow = () => {
  const [outfit, setOutfit] = useState({})
  const [hasError, setHasError] = useState(false)
  const [buyButtonClicked, setBuyButtonClicked] = useState(false)
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

  // function created to run when buy button is clicked
  const addOutfitToBasket = () => {
    // we need to see what is currently in local storage
    const currentItems = JSON.parse(localStorage.getItem('outfits'))
    console.log('current items', currentItems)
    const itemsToAdd = currentItems ? [...currentItems, { ...outfit }] : [{ ...outfit }]
    localStorage.setItem('outfits', JSON.stringify(itemsToAdd))
    setBuyButtonClicked(true)
  }
  console.log('outfit', outfit)


  return (

    <Container fluid className="container-show-card">
      <div className="header-outfit-show" >
        <h1 className="text-center">{outfit.item_1}</h1>
      </div >
      {outfit ?
        <Row>
          <Col>
            <div className="text-center">
              <img src={outfit.image} alt={outfit.title} className="individ-image-2" />
              <span className="boxed">
                <p className="detailed-picture-1">{outfit.quote}</p>
                <p className="detailed-picture-2">{outfit.detail}</p>
              </span>
            </div>
          </Col>
          <Col md={1}></Col>
          <Col sm={6}>
            <div className="text-center" >
              {/* <p>{outfit.item_1}</p> */}
              <img src={outfit.image_1} alt={outfit.title} className="individ-image" />
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
              <Button onClick={addOutfitToBasket} variant={buyButtonClicked ? 'secondary' : 'warning'} size="lg">{buyButtonClicked ? 'Added to basket' : 'Add to bag'}</Button>
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