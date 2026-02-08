import { useState } from 'react'

import './App.css'

function App() {
const[state,setState] = useState('palak') 

  return (
    <>
      <h1>Get input value</h1>
      <input className='input' value={state} type="text" onChange={(e)=>setState(e.target.value)} placeholder='Enter user name' />

    <h2>{state}</h2>

    <button onClick={()=>setState('')}>Clear</button>
    </>
  )
}

export default App
