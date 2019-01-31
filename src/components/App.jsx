import React from 'react'
import Form from './Form';
import TodoList from '../containers/TodoList';
import Filter from '../containers/Filter';

const App = ({ addTodo }) => {
    return (
        <div className="container">
            <Form addTodo={addTodo} />
            <hr />
            <TodoList />
            <Filter />
        </div>
    )
}

export default App
