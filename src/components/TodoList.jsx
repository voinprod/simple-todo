import React from 'react'
import TodoItem from './TodoItem';

export default function TodoList({ todos, removeTodo }) {
    return (
        <ul>
            {todos && todos.map(todo => (
                <TodoItem key={todo.id}  {...todo} removeTodo={() => removeTodo(todo.id)} />
            ))}
        </ul>
    )
}
