import { createStore, combineReducers } from 'redux'
import clubReducer from './reducers/club'
import userReducer from './reducers/user'
import teacherReducer from './reducers/teacher'

const reducers = combineReducers({
    club: clubReducer,
    user: userReducer,
    teacher: teacherReducer
})

const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig