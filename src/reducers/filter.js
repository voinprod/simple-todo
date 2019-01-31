export const SET_FILTER = 'SET_FILTER'
export const SHOW_ALL = 'SHOW_ALL'
export const SHOW_COMPLETED = 'SHOW_COMPLETED'
export const SHOW_ACTIVE = 'SHOW_ACTIVE'



export default (state = SHOW_ALL, action) => {
    switch (action.type) {
        case SET_FILTER:
            return action.payload
        default:
            return state
    }
}