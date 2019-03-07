import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    dialogStatus: false,
    dialogMessage: ''
})
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.OPEN_DIALOG:
            return state.merge({
                dialogStatus: fromJS(action.status),
                dialogMessage: fromJS(action.dialog)
            })
        case constants.CLOSE_DIALOG:
            return state.set('dialogStatus', false)
        default: return state;
    }
}
