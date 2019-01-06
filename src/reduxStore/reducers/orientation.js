import { SET_ORIENTATION } from '../actions/actionTypes'

const initialState = {
    orientation: "portrait"
}

const orientationReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_ORIENTATION:
            return {
                ...state,
                ...action.orientation
            }
        default:
            return state
    }
}

export default orientationReducer