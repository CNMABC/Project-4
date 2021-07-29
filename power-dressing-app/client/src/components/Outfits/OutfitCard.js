import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const OutfitCard = ({ id, title, image }) => {

  return (
    <span className="card-span">
      <Card style={{ width: '18rem' }}>
        <Card.Img className="card-image" variant="top" img src={`${image}`} />
        <Card.Body id={id}>
          <Card.Title>{title}</Card.Title> 
          {/* <Card.Text>{category}</Card.Text> */}
          <Link to={`/outfits/${id}`}>
            <Button variant="outline-dark">Shop now</Button>
          </Link>
        </Card.Body>
      </Card>
    </span>
  )


}


export default OutfitCard