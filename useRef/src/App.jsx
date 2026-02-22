import { useEffect, useRef, useState } from 'react'
import './App.css'
function App() {
 const colors = [
  "#FF6B6B", // coral red
  "#6BCB77", // fresh green
  "#4D96FF", // bright blue
  "#FFD93D", // warm yellow
  "#845EC2", // purple
  "#FF9671", // peach
  "#00C9A7", // teal
  "#C34A36", // earthy red
  "#2C73D2", // strong blue
  "#B0A8B9" , // soft lavender
   "#FF0080",
  "#7928CA",
  "#FF4D4D",
  "#00DBDE",
  "#FC00FF",
  "#00F5A0",
  "#FF7A18",
  "#32D2AA",
  "#4776E6",
  "#8E54E9"
];
  const[color,setColor] = useState(colors[0]);
 const boxRef = useRef(document.body);

  useEffect(()=>{
 boxRef.current.style.backgroundColor = color;
  },[color]);


  const changeColor = () => {
    const random = colors[Math.floor(Math.random() *colors.length)] ;
   setColor(random);
  };

  return (
    <>
      <button onClick={changeColor}>Change Background</button>
    </>
  );
}

export default App

