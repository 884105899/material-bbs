import { combineReducers } from 'redux-immutable'
import { reducer as plateReducer } from '../page/plate/store'
import { reducer as loginReducer } from '../page/login/store'
import { reducer as dialogReducer } from '../common/dialog/store'

const reducer = combineReducers({
    plate: plateReducer,
    login: loginReducer,
    dialog: dialogReducer
})
export default reducer