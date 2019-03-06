import { fromJS } from 'immutable'
import * as constants from './constants'
const defaultState = fromJS({
    plates: [],
    date:''
})
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.GET_PLATE_DATA:
            return state.merge({
                'plates': fromJS(action.data),
                'date':new Date()
            })
        default: return state;
    }
}