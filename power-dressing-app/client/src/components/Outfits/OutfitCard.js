import React from 'react'
import { Nav, Col }  from 'react-bootstrap'

const OutfitCard = ({ _id, title, image }) => {

  return (
    <Nav.Item >
      <Col class='indexShow' xs={12} style={{
        minHeight: '300px',
        backgroundImage: `url("${image}")`,
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
      }}>
        <span id='cardName'><Nav.Link href={`http://localhost:3000/outfits/${_id}`}>{title}</Nav.Link></span>
      </Col>
    </Nav.Item>
  )
}


export default OutfitCard