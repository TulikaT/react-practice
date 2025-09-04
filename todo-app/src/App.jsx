import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo'

function App() {
  const [list, setList] = useState([])

  return (
    <>
      <Todo list={list} setList={setList}/>
    </>
  )
}

export default App
