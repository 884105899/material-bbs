import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
    plates: [],
    date:'',
    buttons:[],
    nowButton:0,
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.GET_PLATE_DATA:
            return state.merge({
                'plates': fromJS(action.data),
                'date':new Date()
            })
        case constants.GET_BUTTON_NAME:
            return state.merge({
                'buttons':fromJS(action.data)
            })
        case constants.SELECT_PLATE_CLASS:
            return state.set('nowButton',fromJS(action.data))
        default: return state;
    }
}
