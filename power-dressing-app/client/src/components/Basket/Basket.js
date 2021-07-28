// click buy outfit button and store item in local storage 
// pop up toast saying that Item has been added to basket 
// click on checkout word in navbar and go to checkout page
// checkout page has all items in it 
// add up amount of price items give total 
import React, { useEffect, useState } from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'


const Basket = () => {
  const [basketItems, setBasketItems] = useState(null)

  useEffect(() => {
    const getBasketFromLocalStorage = () => {
      const items = JSON.parse(localStorage.getItem('outfits'))
      // console.log('items in basket', items)
      setBasketItems(items)
    }
    getBasketFromLocalStorage()

  }, [])


  //Increase Quantity of items in basket

  //Decrease Quantity of items in basket 

  //total the amount of price 


  return (
    <>
      <h2 className="basket-title">Basket</h2>
      <Container fluid>
        <Row>
          <Col xs={12} md={8}></Col>
          <Col xs={12} md={8}>
            <div className="basket-area">
              {basketItems && basketItems.map(basketItem => {
                if (basketItem !== null) {// if items in basket is === null return Your basket is empty - 'Continue shopping' button
                  return (
                    <>
                      <Container>
                        <Row>
                          <Col sm><div ><img src={basketItem.image_1} alt={basketItem.title} className="item-img"></img></div></Col>
                          <Col sm><h5 key={basketItem.id} className="basket-item-name text-center align-items">{basketItem.item_1}</h5></Col>
                          <Col sm><p className=" price-basket text-center">Price: £{basketItem.price_1}.00</p>
                            <p>Quantity</p><Button variant="secondary">-</Button><Button variant="light">0</Button><Button variant="secondary">+</Button>
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
                }
                <h2>Your basket is empty</h2>
              })}
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