import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Col from 'react-bootstrap/Col'


const OutfitCard = ({ _id, title, image }) => {

  return (
    <Nav.Item >
      <Col className='indexShow' xs={12} style={{
        minHeight: '300px',
        backgroundImage: `url("${image}")`,
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        padding: '10px',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',

      }}>
        <span id='cardName'><Nav.Link href={`http://localhost:3000/outfits/${_id}`}>{title}</Nav.Link></span>
      </Col>
    </Nav.Item>
  )
}

export default OutfitCard