import React, {useState} from "react"
import {connect} from "react-redux"
import {addSmurf} from "../actions/index";

const Form = (props) => {
    const [newSmurf, setNewSmurf] = useState({
        name: "",
        age: "",
        height: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(newSmurf)
        props.addSmurf(newSmurf)
    }

    const handleChanges = (e) => {
        let name = e.target.name;

        setNewSmurf({ ...newSmurf, [name] : e.target.value})
    }

    return (
        <div className="form-div">
            <form>
                <input
                name="name"
                type="text"
                placeholder="Enter Smurf name"
                onChange={handleChanges}>
                </input>
                <input
                name="age"
                type="text"
                placeholder="Enter Smurf age"
                onChange={handleChanges}>
                </input>
                <input
                name="height"
                type="text"
                placeholder="How tall is your Smurf?"
                onChange={handleChanges}>
                </input>
                <button type="submit" onClick={handleSubmit}>Add a smurf</button>
            </form>
        </div>
    )
}

export default connect(null,
{addSmurf})(Form)