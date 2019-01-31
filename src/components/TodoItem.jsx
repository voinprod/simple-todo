import React from 'react'

export default function TodoItem({ text, removeTodo, completed }) {
    return (
        <React.Fragment>
            <li
                style={{
                    textDecoration: !completed ? 'none' : 'line-through'
                }}
                onClick={removeTodo}>{text}</li>
        </React.Fragment>
    )
}
