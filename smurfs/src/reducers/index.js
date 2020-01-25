const initialState = {
    smurf: [],
    isLoading: false,
    error:''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
    case 'FETCHING_SMURF':
        return{
            ...state,
            isLoading: true
        };
    case 'FETCHING_SMURF_SUCCESS':
        return{
            ...state,
            isLoading: false,
            smurf: action.payload.data
        }
    case 'ADDING_SMURF_SUCCESS':
        return {
            ...state,
            smurf: action.payload.data
        }
        default:
        return state;
    }
}