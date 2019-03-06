import { combineReducers } from 'redux-immutable'
import { reducer as plateReducer} from '../page/plate/store'

const reducer = combineReducers({
    plate: plateReducer
})
export default reducer