import React from 'react'
import { Card, Button } from 'react-bootstrap'


const OutfitCard = ({ _id, title, image }) => {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img className = "card-image" variant="top" img src={`${image}`}/>
      <Card.Body id = {_id}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {/* {quote} */}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}


export default OutfitCard