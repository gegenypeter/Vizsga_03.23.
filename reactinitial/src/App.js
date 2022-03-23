import React, { useEffect, useState } from "react"
import axios from "axios"
import Product from "./components/Product"

const App = () => {
const [clothes, setClothes] = useState([])

  const load = async () => {
    const response = await axios('https://demoapi.com/api/api/clothes')
    setClothes(await response.data)
    console.log(response.data)
  }

  useEffect(() => {
    load()
  }, [])

  return (
    <div>
      <h1>Webshop</h1>
      {clothes.map((cloth, index) => <Product key={index} cloth={cloth} />)}
    </div>
  )
}

export default App
