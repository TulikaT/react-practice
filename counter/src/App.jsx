import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  function handleInc(){
    setCount(count= count+1)
  }

  function handleDec(){
    setCount(count= count-1)
  }

  return (
    <div className='div'>
      <h1>Counter</h1>
      <input type="text" readOnly value={count}  />
      <div className='action'>
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
      </div>
    </div>
  )
}

export default App
