import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as todoAction from '../actions/todoAction';
import TodoList from "../components/TodoList";
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../reducers/filter'
const getSortTodos = (todos, filter) => {
    switch (filter) {
        case SHOW_ALL:
            return todos
        case SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed)
        case SHOW_COMPLETED:
            return todos.filter(todo => todo.completed)
        default:
            return todos;
    }
}
const mapStateToProps = (store) => {
    return {
        todos: getSortTodos(store.todo, store.filter)
    }
}

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(todoAction, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

