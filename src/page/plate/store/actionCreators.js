import axios from 'axios'
import * as constants from './constants'
const getPlateList = (plateList)=>({
    type:constants.GET_PLATE_DATA,
    data:plateList
})
export const getPlateDate = ()=>{
    return (dispatch)=>{
        axios.get('/api/user.json').then((res)=>{
            const result = res.data;
            dispatch(getPlateList(result))
        })
    }
}