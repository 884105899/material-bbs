import { combineReducers } from 'redux-immutable'
import { reducer as plateReducer } from '../page/plate/store'
import { reducer as loginReducer } from '../page/login/store'

const reducer = combineReducers({
    plate: plateReducer,
    login: loginReducer
})
export default reducer