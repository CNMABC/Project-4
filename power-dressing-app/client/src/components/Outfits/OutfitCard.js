import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const OutfitCard = ({ id, title, image }) => {

  return (
    <Card style={{ width: '18rem' }}>

      <Card.Img className="card-image" variant="top" img src={`${image}`} />
      <Card.Body id={id}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {/* {quote} */}
        </Card.Text>
        <Link to={`/outfits/${id}`}>
          <Button variant="primary">Go somewhere</Button>
        </Link>
      </Card.Body>

    </Card>
  )
}


export default OutfitCard