import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div> 
            <nav className='header'>
                <a href="/menu">Menu</a>
                <a href="/meal">Meal</a>
                <a href="/about">About</a>
            </nav>
        </div>
    );
};

export default Header;