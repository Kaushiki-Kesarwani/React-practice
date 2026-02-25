
import './App.css'
import styled from 'styled-components'
function App() {

  const Heading = styled.h1`
  color:white;
    border:2px solid wheat;
    padding : 7px;
    border-radius : 9px;
    background-color :#022F40;
    
  `;

  const Button = styled.button`
  width:7rem;
  background-color:blue;
  font-size:2rem;
  padding: 0 1rem 0 1rem;
  `;

  const Box = styled.div`
  width:50vw;
  height:50vh;
  border:3px solid white; 
  margin-top:15px;
  background-color:maroon;
  display : flex;
  justify-content:center;
  align-items:center;
  font-size:3rem;
  `
  return (
    <>
     <Heading>i am styled component</Heading>
     <Heading>i am styled component</Heading>
     <Heading>i am styled component</Heading>
     <Heading>i am styled component</Heading>
     <Heading>i am styled component</Heading>

     <Button>click!</Button>

     <Box>Styled components</Box>
       
    </>
  
  )
}

export default App
