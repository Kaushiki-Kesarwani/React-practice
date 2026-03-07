
import { useMemo, useState } from 'react'
import './App.css'

function App() {
const [number,setNumber] = useState(0);
const [count,setCount] = useState(0);


function slowSquare(num){
  console.log("Calculating...");
  for(let i = 0;i< 1000000000;i++){}
  return num*num;
}

const square = useMemo(()=>slowSquare(number),[number]);
  return (
    <>
  <h2>Square : {square}</h2>

  <button onClick={()=>setNumber(number+1)}>Change number</button>

 <h2>Count : {count}</h2>
  <button onClick={()=>setCount(count+1)}>update count</button>
    </>
  )
}

export default App
