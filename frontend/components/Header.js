import React from 'react';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/trade">Trade</a></li>
                    <li><a href="/leaderboard">Leaderboard</a></li>
                    <li><a href="/profile">Profile</a></li>
                    <li><a href="/admin">Admin Panel</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
