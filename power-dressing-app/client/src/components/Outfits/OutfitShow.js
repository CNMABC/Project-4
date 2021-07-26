import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'



const OutfitShow = () => {
  const [outfit, setOutfit] = useState({})
  const { id } = useParams()
  console.log('params', id)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`/api/outfits/${id}`)
      setOutfit(data)
    }
    getData()
  }, [id])

  console.log('outfit', outfit)

  return (
    <section>
      <div>
        <p>{outfit.quote}</p>
        <p>{outfit.item_1}</p>
      </div>
    </section>
  )
}

export default OutfitShow