import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row } from 'react-bootstrap'
// import OutfitCard from './OutfitCard'

const OutfitGrid = () => {
  const [outfits, setOutfits] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/outfits/')
        setOutfits(data)
        // console.log('data', data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])




  return (
    <section>
      <Container fluid>
        <Row xs="1" sm="2" md="3">
          {outfits.map(outfit => {
            return <div key={outfit._id}>
              <p>{outfit.title}, {outfit.image}</p>
              {/* <OutfitCard/>  */}
            </div>
          })}
        </Row>
      </Container>
    </section>

  )
}

export default OutfitGrid