import { combineReducers } from 'redux-immutable'
import { reducer as registerReducer } from '../page/register/store'

const reducer = combineReducers({
    register: registerReducer
})
export default reducer