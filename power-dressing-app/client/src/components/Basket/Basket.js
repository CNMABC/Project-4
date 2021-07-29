/* eslint-disable no-unused-vars */
// click buy outfit button and store item in local storage 
// pop up toast saying that Item has been added to basket 
// click on checkout word in navbar and go to checkout page
// checkout page has all items in it 
// add up amount of price items give total 
import React, { useEffect, useState } from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


const Basket = () => {
  const [basketItems, setBasketItems] = useState(null)

  // const { id } = useParams()

  useEffect(() => {
    const getBasketFromLocalStorage = () => {
      const items = JSON.parse(localStorage.getItem('outfits'))
      // console.log('items in basket', items)
      setBasketItems(items)
    }
    getBasketFromLocalStorage()

  }, [])

  // ?keep note of current quantity
  //what is the current quantity
  const handleChange = (event) => {
    setBasketItems(event.target.value)
  }


  //?Increase Quantity of items in basket
  const increaseQuantity = () => {
    const plus = basketItems.map(item => {
      // if item added matches item id 
      item.quantity = item.quantity + 1
      //then return item
    })

  }
  //get current quantity add one when button is clicked



  //?Decrease Quantity of items in basket 
  //get current quantity minus one when button is clicked

  //?total the amount of price of each item in basket
  //get each price of item and add together to total final price


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
                    <Container>
                      <Row>
                        <Col sm><div ><img src={basketItem.image_1} alt={basketItem.title} className="item-img"></img></div></Col>
                        <Col sm><h5 key={basketItem.id} className="basket-item-name text-center align-items">{basketItem.item_1}</h5></Col>
                        <Col sm><p className=" price-basket text-center">Price: £{basketItem.price_1}.00</p>
                          <p>Quantity</p><Button variant="secondary">-</Button><Button variant="light">0</Button><Button variant="secondary" onChange={handleChange}>+</Button>
                          <form>
                            <label className=" size-input-area text-center">
                              Size :
                              <input type="text" name="name" />
                            </label>
                          </form>
                        </Col>
                      </Row>
                      <hr className="mt-2 mb-3" />
                    </Container>
                  </>
                )
              })
                :
                <>
                  <h2>Your basket is empty</h2>
                  <LinkContainer to="/outfits">
                    <Button variant="light"> Lets shop!</Button>
                  </LinkContainer>
                </>}

            </div>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col>
            <h4>Total : £ .00</h4>
          </Col>
          <Col></Col>
        </Row>

      </Container>


    </>
  )
}
export default Basket

// {outfits.map(outfit => {
//   return <OutfitCard key={outfit._id} {...outfit} />
// })}