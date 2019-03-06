import axios from 'axios'
import { LOGIN_CONFIR } from './constants'

const loginConfir = (logstate) => ({
    type: LOGIN_CONFIR,
    data: logstate
})

export const getUserInfo = (email, password) => {
    return (dispatch) => {
        axios.get('/api/users.json').then((res) => {
            console.log(password)
            if (res.data.password === password) {
                dispatch(loginConfir(true))
            } else {
                console.log('denglushibai')
                dispatch(loginConfir(false))
            }
        })
    }
}