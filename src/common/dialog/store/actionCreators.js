import * as constants from './constants'

export const openDialog = (status, msg) => ({
    type: constants.OPEN_DIALOG,
    status: status,
    dialog: msg
})
export const closeDialog = () => ({
    type: constants.CLOSE_DIALOG
})