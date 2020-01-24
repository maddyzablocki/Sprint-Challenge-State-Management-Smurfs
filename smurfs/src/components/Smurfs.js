import React from "react"

const Smurf = (props) => {
    return (
        <div className="smurf">
            <h2>{props.smurf.name}</h2>
            <p>I am {props.smurf.age} years old</p>
            <p>I am {props.smurf.height} tall</p>
        </div>
    )
}

export default Smurf