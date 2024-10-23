import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Showproducts from './components/Showproducts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Showproducts/>
    </>
  )
}

export default App
