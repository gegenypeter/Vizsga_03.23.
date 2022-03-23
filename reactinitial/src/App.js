import React, { useEffect, useState } from "react"
import axios from "axios"

const App = () => {
const [clothes, setClothes] = useState([])

  const load = async () => {
    const response = await axios('https://demoapi.com/api/api/clothes')
    setClothes(await response.data)
  }

  useEffect(() => {
    load()
  }, [])

  return (
    <div>
      <h1>Webshop</h1>
    </div>
  )
}

export default App
