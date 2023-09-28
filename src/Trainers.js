import React from "react";
import { Link } from "react-router-dom";
import NewTrainer from "./NewTrainer";

const Trainers = ({trainers, newTrainer}) => {
    return (
      <div>
        <h1>All the Trainers</h1>
        {
          trainers.map((trainer) => {
            return(
                <div key={trainer.id}>
                    <Link to={`/trainers/${trainer.id}`}> <h3 >{trainer.name}</h3></Link>
                </div>
             
            )
          })
        }
        <NewTrainer newTrainer={newTrainer}/>
      </div>
    )
  }

  export default Trainers