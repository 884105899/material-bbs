import axios from 'axios'
import { LOGIN_CONFIR } from './constants'

const loginConfir = (logstate) => ({
    type: LOGIN_CONFIR,
    data: logstate
})

export const getUserInfo = (email, password) => {
    return (dispatch) => {
        axios.get(`/users/email/${email}`).then((res) => {
            if (res.data === password) {
                alert("登录成功")
                dispatch(loginConfir(true))
            } else {
                alert("登陆失败")
                dispatch(loginConfir(false))
            }
        })
    }
}