import React from 'react'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../reducers/filter';
const Footer = ({ setFilter }) => {
    const handleClick = (e) => {
        setFilter(e);
    }
    return (
        <div className="container">
            <span className="filter" onClick={handleClick.bind(this, SHOW_ALL)}>all</span>
            <span className="filter" onClick={handleClick.bind(this, SHOW_ACTIVE)}>active</span>
            <span className="filter" onClick={handleClick.bind(this, SHOW_COMPLETED)}>completed</span>
        </div>
    )
}

export default Footer
