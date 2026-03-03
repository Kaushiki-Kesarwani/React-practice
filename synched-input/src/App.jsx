import Input from './input'
import Input2 from './input2';
import './App.css'
import { useState } from 'react'

function App() {
 const[sync,setSync] = useState('');

  return (
    <>
    <h1>Synced Inputs</h1>
    <h2>I am first component</h2>
   <Input  val = {sync} setval = {setSync} ></Input>
   <Input  val = {sync} setval = {setSync} ></Input>

  <h2>I am second component</h2>
  <Input2 val = {sync} setval = {setSync}></Input2>
  <Input2 val = {sync} setval = {setSync}></Input2>
    </>
  )
}

export default App
