import React from 'react'
import './input.css';
const Input = ({val,setval}) => {
  return (
    <div>
        <input className="input" type="text" value = {val} onChange = {(e)=>setval(e.target.value)}/>
    </div>
  )
}

export default Input