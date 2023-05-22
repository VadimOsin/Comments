import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ avatar, name, email }) => {
    return (
        <header className="header">
            <div className="header-burger">
                {/* реализация меню-бургера */}
            </div>
            <nav className="header-nav">
                <ul className="header-nav-list">
                    <li>
                        {/*<Link to="/">Список постов</Link>*/}
                    </li>
                    <li>
                        {/*<Link to="/about">Обо мне</Link>*/}
                    </li>
                </ul>
                <div className="header-user">
                    <img className="header-avatar" src={avatar} alt="Avatar" />
                    <div className="header-info">
                        <div className="header-name">{name}</div>
                        <div className="header-email">{email}</div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;