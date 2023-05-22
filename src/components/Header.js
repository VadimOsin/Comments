import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import avatar from '../img/avatars.jpg';

const Header = ({ name, email }) => {
    return (
        <Navbar expand="lg" bg="dark" variant="dark" className="header">
            <Navbar.Toggle aria-controls="navbar" className="header-burger" />
            <Navbar.Collapse id="navbar">
                <Nav className="mr-auto header-nav">
                    <Nav.Link as={Link} to="/" className="header-nav-link">
                        Список постов
                    </Nav.Link>
                    <Nav.Link as={Link} to="/about" className="header-nav-link">
                        Обо мне
                    </Nav.Link>
                </Nav>
                <div className="header-user">
                    <Image src={avatar} alt="Avatar" className="header-avatar" roundedCircle width={50} height={50}  />
                    <div className="header-info">
                        <div className="header-name">{name}</div>
                        <div className="header-email">{email}</div>
                    </div>
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
