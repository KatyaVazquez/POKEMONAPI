import React from 'react'
import { useState } from 'react';

const App = () => {
const [data, setData] = useState([])


        const datos = async ()=>{
          const url = "https://pokeapi.co/api/v2/pokemon/?limit=807"
          const res = await fetch(url);
          const datos = await res.json();
          const pokemon = datos.results.map(pokemon => pokemon.name)
          setData(pokemon);
          /* console.log(datos.results[5].name); */
        }


        

        const pokemones = () =>{
          datos();
        }

        

  return (
    <>
    <button style={{margin: "50px"}} onClick={pokemones}>Fetch Pokemon</button>
   {data.map((pokemon, idx) => <p key={idx} style={{margin: "50px"}}><li>{pokemon}</li></p>)}
    </>
  )
}

export default App
