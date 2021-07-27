import React, {useEffect, useState } from 'react'
import axios from 'axios'


const Basket = () => {

const [getOutfit, setOutfit] = useState([])

const getItem = () => {
  const item = localStorage.getItem('_id')
  return JSON.parse.apply(item)
}

useEffect(() => {
  console.log('getItem--->',getItem())
  const getData = asysnc () => {
    const { data } = await axios.get(`/api/outfits/${id}`)

  }
})




  return (
    <h1>Checkout</h1>
  )
}
export default Basket 