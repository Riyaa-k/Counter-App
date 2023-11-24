import { useState } from 'react'
import './App.css'

function App() {
  const [count,setCount]=useState(0);

  function handleIncrement(){
    setCount(count+1)
  }
  function handleDecrement(){
    setCount(count-1)
  }
  function handleReset(){
    setCount(0)
  }

  return(
    <>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <div>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  )
}

export default App
