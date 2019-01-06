import { SET_ORIENTATION } from './actionTypes'
export const setOrientation = (orientation) => {
    return {
        type: SET_ORIENTATION,
        orientation: orientation
    }
}
