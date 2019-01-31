export const SET_TODO = 'SET_TODO'
export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'

export default (state = [], action) => {
    switch (action.type) {
        case SET_TODO:
            return state
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false,
                }
            ]
        case REMOVE_TODO:
            return state.map(todo => (
                action.payload === todo.id ? { ...todo, completed: true } : todo
            ))
        default:
            return state;
    }
}