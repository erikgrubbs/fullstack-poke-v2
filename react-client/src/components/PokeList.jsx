import React from 'react';
import PokeListEntry from './PokeListEntry.jsx';

const PokeList = ({pokemon}) => (
  <div>
    {pokemon.map((poke, i) => (
      <PokeListEntry key={i} poke={poke}/>
    ))}
  </div>
)

export default PokeList;