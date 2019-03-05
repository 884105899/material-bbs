import axios from 'axios'
import * as constants from './constants'

const registerUser = (name, email, password) => ({
    type: constants.CREATE_NEW_USER,
    name,
    email,
    password
})