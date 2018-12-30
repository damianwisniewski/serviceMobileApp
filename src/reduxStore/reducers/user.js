import { SET_USER } from '../actions/actionTypes'

const initialState = {
    id: 0,
    company: '', 
    name: '', 
    surname: '',
    authorized: false
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                ...action.userData
            }
        default:
            return state
    }
}

export default userReducer