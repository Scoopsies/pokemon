import React, { useState } from 'react'

const NewTrainer = ({newTrainer}) => {
    const [newTrain, setNewTrain] = useState('');

    const submitHandler = (ev) => {
        ev.preventDefault()
        const json = {name: newTrain}
        newTrainer(json)
        setNewTrain('')
    }

  return (
    <form onSubmit={(ev) => submitHandler(ev)}>
        <h3>New Trainer:</h3>
        <input value={newTrain} onChange={ev => setNewTrain(ev.target.value)} ></input>
        <button disabled={!newTrain}>Submit</button>
    </form>
  )
}

export default NewTrainer;