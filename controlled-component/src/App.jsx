import { useState } from 'react'

import './App.css'

function App() {
const[name,setName] = useState("");
const[password,setPassword] = useState("");
const[email,setEmail] = useState("");

const clear = ()=>{
  setName("");
  setPassword("");
  setEmail("");
}
  return (
    <>
    <h1>Controlled Components</h1>

    <input className="input-field" value = {name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter name'/>
<br />
        <input  className="input-field" value={password} onChange={(e) => setPassword(e.target.value)}  type="text" placeholder='Enter password'/>
<br />
            <input  className="input-field" value={email} onChange={(e) => setEmail(e.target.value)}  type="text" placeholder='Enter email'/>
<br />
            <button id='btn'>Submit</button>

          <button onClick={clear} >Clear</button>

            <h2>Name : {name}</h2>
             <h2>Password : {password}</h2>
              <h2>E-mail : {email}</h2>
    </>
  )
}

export default App
