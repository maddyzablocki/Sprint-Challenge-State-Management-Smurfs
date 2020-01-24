import axios from 'axios';

export const fetchSmurf = () => {
    return dispatch => {
        dispatch({ type: 'FETCHING_SMURF' });
        axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({ type: 'FETCHING_SMURF_SUCCESS', payload: res})
        })
        .catch(err => console.log(err));
    };
};

export const addSmurf = (smurf) => dispatch => {
    dispatch({type: 'ADDING_SMURF_START'})
    axios
        .post("http://localhost:3333/smurfs", smurf)
        .then(res => {
            console.log(res)
            dispatch({
                type: 'ADDING_SMURF_SUCCESS',
                payload: res
            })
        })
        .catch(err => console.log(err))

}