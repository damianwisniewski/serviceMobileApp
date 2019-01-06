import { createStore, combineReducers } from 'redux'
import userReducer from './reducers/user'
import orientationReducer from './reducers/orientation'

const reducers = combineReducers({
   user: userReducer,
   orientation: orientationReducer
})

export default reduxStore = () => createStore(reducers)