import axios from 'axios'
import * as constants from './constants'


const getPlateList = (plateList) => ({
    type: constants.GET_PLATE_DATA,
    data: plateList
})
const getButtonList = (ButtonList) => ({
    type: constants.GET_BUTTON_NAME,
    data: ButtonList
})
export const selectPlateClass = (index) => ({
    type: constants.SELECT_PLATE_CLASS,
    data: index
})
export const getPlateDate = () => {
    return (dispatch) => {
        axios.get('/post/').then((res) => {
            const result = res.data;
            console.log(result.length)
            if (result.length > 0) {
                dispatch(getPlateList(result))
            } else {
                alert("该板块没有帖子")
            }
        })
    }
}


export const getButtonName = () => {
    return (dispatch) => {
        axios.get('/section/').then((res) => {
            console.log(res.data)
            const result = res.data;
            dispatch(getButtonList(result))
        })
    }
}

