import React, {useEffect} from "react"
import Smurfs from "./Smurfs"
import {connect} from "react-redux"
import { fetchSmurf } from "../actions/index";

const SmurfList = props => {

    useEffect(() => {
        props.fetchSmurf()
    }, [])

    return (
        <div className="smurf-list">
            {props.smurf.map(smurf => {
                return <Smurfs smurf={smurf}/>
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        smurf: state.smurf
    }
}

export default connect(mapStateToProps,
{fetchSmurf})(SmurfList)