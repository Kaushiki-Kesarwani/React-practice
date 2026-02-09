import { useState } from 'react'
import './App.css'

function App() {
  const[skill,setSkill] = useState([]);
 
  const handleSkills = (event) => {
// console.log(event.target.value, event.target.checked);

 if(event.target.checked){
  setSkill([...skill ,event.target.value]);
 }
else{
  setSkill([...skill.filter((item)=>item!=event.target.value)
  ])
}
  }
  return (
    <>
     <h1>Checkboxes</h1>

     <h3>Select your Skills</h3>
     <div className='box'>

      <div className='box1'>
     <input type="checkbox" onChange={handleSkills} id='reactjs' value="reactjs" />
     <label htmlFor="reactjs">reactjs</label>
     </div>

<div className='box1'>
          <input type="checkbox" onChange={handleSkills} id='nodejs' value="nodejs" />
          <label htmlFor="nodejs">nodejs</label>
          </div>

<div className='box1'>
               <input type="checkbox" onChange={handleSkills} id='java' value="java" />
               <label htmlFor="java">java</label>
               </div>

                  <div className='box1'>
                    <input type="checkbox" onChange={handleSkills} id='javaScript' value="javaScript" />
                    <label htmlFor="javaScript">javaScript</label>
                    </div>
                    </div>

                    <h1>{skill.toString()}</h1>
    </>
  )
}

export default App
