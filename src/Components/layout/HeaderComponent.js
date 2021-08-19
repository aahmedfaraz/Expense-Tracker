import React from 'react';
import {Link} from 'react-router-dom';

const HeaderComponent = () => {
    return (
        <header>
            <h1>Expense Tracker</h1>
            <ul>
                <Link to="/" style={listStyle}><li>Home</li></Link>
                <Link to="/about" style={listStyle}><li>About</li></Link>
            </ul>
        </header>
    )
}

const listStyle = {
    color: 'white',
    textDecoration: 'none',
}

export default HeaderComponent;