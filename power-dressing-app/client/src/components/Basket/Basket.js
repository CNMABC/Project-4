/* eslint-disable no-unused-vars */
// click buy outfit button and store item in local storage 
// pop up toast saying that Item has been added to basket 
// click on checkout word in navbar and go to checkout page
// checkout page has all items in it 
// add up amount of price items give total 
import React, { useEffect, useState } from 'react'
import { Container, Col, Row, Button, Form, Dropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


const Basket = () => {
  const [basketItems, setBasketItems] = useState(null)
  const [total, setTotal] = useState(0)

  // const { id } = useParams()

  useEffect(() => {
    const getBasketFromLocalStorage = () => {
      const items = JSON.parse(localStorage.getItem('outfits'))
      // add key of quantity to each item and start at 1
      const updatedWithQuantity = items.map(outfit => {
        return { ...outfit, quantity: 1 }
      })
      setBasketItems(updatedWithQuantity)
    }
    getBasketFromLocalStorage()
  }, [])

  // function to update quantity
  // takes in 2 arguments, id of the item clicked on and the operator which is plus or minus
  // maps through, finds the outfit to update, updates the quantity
  // if no match just returns the item as it is
  const updateQuantities = (itemId, operator) => {
    const updatedOutfits = basketItems.map(item => {
      if (item.id === itemId) {
        if (item.quantity === 0 && operator === '-') return item
        return { ...item, quantity: operator === '+' ? item.quantity + 1 : item.quantity - 1 }
      }
      return item
    })
    setBasketItems(updatedOutfits)
  }
  // total up the cost based on the quantity, this runs everytime basketitems is updated
  useEffect(() => {
    const totalPrice = basketItems && basketItems.reduce((acc, item) => {
      return acc + (item.price_1 * item.quantity)
    }, 0)
    setTotal(totalPrice)
  }, [basketItems])



  return (
    <>
      <h2 className="basket-title">Basket</h2>
      <Container fluid>
        <Row>
          <Col xs={12} md={8}></Col>
          <Col xs={12} md={8}>
            <div className="basket-area">
              {basketItems ? basketItems.map(basketItem => {
                // if items in basket is === null return Your basket is empty - 'Continue shopping' button
                return (
                  <>
                    <Container key={basketItem.id}>
                      <Row>
                        <Col sm><div ><img src={basketItem.image_1} alt={basketItem.title} className="item-img"></img></div></Col>
                        <Col sm><h5 key={basketItem.id} className="basket-item-name text-center align-items">{basketItem.item_1}</h5></Col>
                        <Col></Col>
                        <Col sm><p className=" price-basket text-center">Price: £{basketItem.price_1}.00</p>
                          <span className="quantity-and-price">
                            <Dropdown>
                              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                Size
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">8</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">10</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">12</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">14</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">16</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">18</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">20</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">22</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>

                            <p className="text-center">Quantity</p>
                            <Button variant="secondary" onClick={() => updateQuantities(basketItem.id, '-')}>-</Button>
                            <Button variant="light">{basketItem.quantity}</Button>
                            <Button variant="secondary" onClick={() => updateQuantities(basketItem.id, '+')}>+</Button>

                          </span>
                        </Col>
                      </Row>
                    </Container>
                  </>
                )
              })
                :
                <>
                  <h2 className="text-center">Your basket is empty</h2>
                  <LinkContainer to="/outfits/">
                    <Button variant="light"> Lets shop!</Button>
                  </LinkContainer>
                </>}
            </div>
          </Col>
        </Row>
        <hr className="mt-2 mb-3" />
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col>
            <h4>Total : {total && total.toLocaleString('en-UK', { style: 'currency', currency: 'GBP' })}</h4>
          </Col>
          <Col></Col>
        </Row>
        <hr className="mt-2 mb-3" />
      </Container>
      <h2 className="bank-title">Bank details</h2>
      {/* Form area  */}
      <div className="form">
        <Container>
          <Row>
            <Col></Col>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control placeholder="Enter name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Shipping Address</Form.Label>
                <Form.Control placeholder=" 19 Privett Drive" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Card Number</Form.Label>
                <Form.Control />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Card Number</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Sort Code</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Security Code CVC</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>
              <Button variant="warning" type="submit">
                Checkout
              </Button>
            </Form>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
export default Basket

