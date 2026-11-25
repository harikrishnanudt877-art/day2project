import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>vite + react</h1>
      <h1 style={{ color: "red", fontSize: "35px" ,textAlign: "center"}}>
        Hello World
      </h1>
      <button onClick={() => setCount((count) => count + 1)}>count is: {count}</button>
      <p className="text-gray-500 text-lg text-center"> learn react step by step</p>
      <button className="bg-blueviolet text-white py-2 px-4 rounded-md m-1 cursor-pointer">Click me</button>
    </>
  )
}

export default App