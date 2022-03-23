import React, { useState } from 'react'
import axios from 'axios'

function SubProduct(props) {
    const [added, setAdded] = useState("Add to cart")
    const {p} = props

    const addToCart = async () => {
        setAdded("Adding")
        const clothData = {id: p.id}
        const response = await axios.post('https://demoapi.com/api/api/cart', clothData)
        setAdded("Added")

    }

  return (
    <div>
        <p>{p.brand}</p>
        <p>{p.color}</p>
        <button onClick={()=>addToCart()}>{added}</button>
    </div>
  )
}

export default SubProduct