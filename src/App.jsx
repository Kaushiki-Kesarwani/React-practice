import { useState } from 'react'

import './App.css'

let next = 0;

function App() {
  const[name,setName] = useState('');
  const[artist,setArtist] = useState([]);

  return (
    <>
     <h1>Inspiring Sculpture:</h1>
     <input value={name} onChange={e => setName(e.target.value)}/>

     <button onClick={()=>{
      setArtist([...artist,{id : next++, name : name}]);
     }}>
      Add
     </button>

     <ul className='ul-list'>
      {artist.map(artist => (<li key={artist.id}>{artist.name}</li>))}
     </ul>

    </>
  )
}

export default App
