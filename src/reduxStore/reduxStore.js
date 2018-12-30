import { createStore, combineReducers } from 'redux'
import userReducer from './reducers/user'

const reducers = combineReducers({
   user: userReducer
})

export default reduxStore = () => createStore(reducers)