// click buy outfit button and store item in local storage 
// pop up toast saying that Item has been added to basket 
// click on checkout word in navbar and go to checkout page
// checkout page has all items in it 
// add up amount of price items give total 
import React, { useEffect, useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'


const Basket = () => {
  const [basketItems, setBasketItems] = useState(null)

  useEffect(() => {
    const getBasketFromLocalStorage = () => {
      const items = JSON.parse(localStorage.getItem('outfits'))
      console.log('items in basket', items)
      setBasketItems(items)
    }
    getBasketFromLocalStorage()

  }, [])





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
                          <Col sm><p className=" price-basket text-center">Price: £{basketItem.price_1}</p></Col>
                        </Row>
                      </Container>

                      {/* <p>Quantity: {basketItem[1].quantity}</p>
              <strong>
                <p>Subtotal: £{basketItem[1].total}</p>
              </strong> */}
                      {/* <Button variant='outline-warning' value={basketItem[1].id} onClick={handleDelete}>Delete</Button> */}
                    </>
                  )
                }
                <h2>Your basket is empty</h2>
              })}
            </div>
          </Col>
          <Col xs={12} md={8}></Col>
        </Row>

      </Container>


    </>
  )
}
export default Basket

// {outfits.map(outfit => {
//   return <OutfitCard key={outfit._id} {...outfit} />
// })}