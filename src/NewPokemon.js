import React, { useState } from 'react'
import Pokemon from './Pokemon';

const NewPokemon = ({newPokemon}) => {
    const [newPoke, setNewPoke] = useState('');

    const submitHandler = (ev) => {
        ev.preventDefault()
        const json = {name: newPoke}
        newPokemon(json)
        setNewPoke('')
    }

  return (
    <form onSubmit={(ev) => submitHandler(ev)}>
        <h3>New Pokemon:</h3>
        <input value={newPoke} onChange={ev => setNewPoke(ev.target.value)} ></input>
        <button disabled={!newPoke}>Submit</button>
    </form>
  )
}

export default NewPokemon;