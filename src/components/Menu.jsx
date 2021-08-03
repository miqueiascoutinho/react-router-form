import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
    display: flex;
    background-color: #000;
    color: #fff;

    ul, li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 10px 50px;
    }

    .link {
        font-size: 20px;
        text-decoration: none;
        color: #fff;
        font-weight: bold;
    }

    .link:hover{
        text-decoration: underline;
    }
`
const Menu = () => {

    return (
        <Nav className="menu">
            <ul>
                <li>
                    <Link className="link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="link" to="/sobre">Sobre</Link>
                </li>
            </ul>
        </Nav>
    )
}

export default Menu;