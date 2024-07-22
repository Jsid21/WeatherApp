import { useState } from 'react'
import Weatherapp from './Weatherapp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Weatherapp />
    </>
  )
}

export default App
