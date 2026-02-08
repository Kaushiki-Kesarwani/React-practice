import { useState } from 'react'
import './App.css'


let artist = [{id:1, name:'Marta Colvin Andrade'},
  {id:2 , name:'Lamidi Olonade Fakeye'},
  {id:3 , name:'Louise Nevelson'}];

function App() {
  const [art, setArt] = useState(artist);

  return (
    <>
      <h1>Sculptures:</h1>     
      <ul>
        {art.map(ar => (<li key={ar.id}>{ar.name}{'   '}
          <button onClick={() => {
            setArt(art.filter(a => a.id !== ar.id));
          }}>
            Delete
          </button>
        </li>))}
      </ul>
    </>
  )
}

export default App
