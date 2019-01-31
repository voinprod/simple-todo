import React from 'react'

export default function Form({ addTodo }) {
    let input;
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(input.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="text">Write here: </label>
                <input type="text" id="text" ref={node => (input = node)} />
                <button type="submit">Create</button>
            </form>
        </div>
    )
}
