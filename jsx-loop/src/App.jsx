
import UserDetails from './components/UserDetails'

import './App.css'

function App() {

  const user = [
    {
      name : "Kaushiki ",
      course : "BCA",
      age : "19 years",
      id : 1
   },
  {
    name : "Meher",
      course : "B.Tech",
      age : "20 years",
      id : 2
  },
  {
   name : "Dev",
      course : "B.BBA",
      age : "22 years",
      id : 3 
  },
  {
   name : "Riya",
      course : "MCA",
      age : "20 years",
      id : 4  
  },
  {
    name : "Myra",
      course : "MBBS",
      age : "21 years",
      id : 5
  },
  
    {
    name : "Myra",
      course : "MBBS",
      age : "21 years",
      id : 5
  }
  
];

  return (
    <>
    <UserDetails user = {user}/>
    </>
  )
}

export default App
