import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
    logStatus: false
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.LOGIN_CONFIR:
            return state.set('logStatus', fromJS(action.data))
        default: return state
    }
}