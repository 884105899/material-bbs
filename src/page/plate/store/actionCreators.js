import axios from 'axios'
import * as constants from './constants'


const getPlateList = (plateList)=>({
    type:constants.GET_PLATE_DATA,
    data:plateList
})
const getButtonList =(ButtonList)=>({
    type:constants.GET_BUTTON_NAME,
    data:ButtonList
})
export const selectPlateClass=(index)=>({
    type:constants.SELECT_PLATE_CLASS,
    data:index
})
export const getPlateDate = ()=>{
    return (dispatch)=>{
        axios.get('/api/user.json').then((res)=>{
            const result = res.data;
            dispatch(getPlateList(result))
        })
    }
}


export const getButtonName = ()=>{
    return (dispatch)=>{
        axios.get('./api/button.json').then((res)=>{
            console.log(res.data)
            const result = res.data;
            dispatch(getButtonList(result))
        })
    }
}

