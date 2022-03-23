import React from 'react'
import { useState } from 'react'
import SubProduct from './SubProduct'

function Product(props) {
    const [isShown, setIsShown] = useState(false)
    const [filterWord, setFilterWord] = useState("")
    const {cloth} = props
  return (
    <div>
        <h2>{cloth.type}</h2>
        <input value={filterWord} type="text" onChange={(e) => setFilterWord(e.target.value)}></input>
        <h3>{cloth.gender}</h3>
        {isShown ? cloth.products.map((p, index) => <SubProduct key={index} p={p} />) : <></>}
        <button onClick={()=>setIsShown(!isShown)}>{isShown ? "Show less" : "Show More"}</button>
        <hr></hr>
    </div>
  )
}

export default Product