import React from 'react'
import { useState } from 'react'
import SubProduct from './SubProduct'

function Product(props) {
    const [isShown, setIsShown] = useState(false)
    const {cloth} = props
  return (
    <div>
        <h2>{cloth.type}</h2>
        <h3>{cloth.gender}</h3>
        {isShown ? cloth.products.map((p, index) => <SubProduct key={index} p={p} />) : <></>}
        <button onClick={()=>setIsShown(!isShown)}>{isShown ? "Show less" : "Show More"}</button>
    </div>
  )
}

export default Product