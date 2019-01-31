import { ADD_TODO, REMOVE_TODO } from '../reducers/todo';
import { SET_FILTER } from '../reducers/filter';
import uuid from 'uuid/v4';

export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        id: uuid(),
        text: text
    }
}

export const removeTodo = (id) => {
    return {
        type: REMOVE_TODO,
        payload: id
    }
}

export const setFilter = (filter) => {
    return {
        type: SET_FILTER,
        payload: filter
    }
}