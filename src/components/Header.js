import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import logo from '../img/logo.png';

const HeaderContainer = styled.div`
    height: 10vh;
    width: 1024px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        height: 64px;
    }

    a {
        button {
            padding: 8px 64px;
            border: none;
            border-radius: 3px;
            outline: none;
            background: linear-gradient(to right, #ff5e62, #ff9966);
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            font-family: 'Quicksand', sans-serif;
            font-size: 14px;
            font-weight: 500;
            color: whitesmoke;
            cursor: pointer;
            transition: 0.25s;

            :hover {
                box-shadow: none;
            }
        }
    }
`

const Header = props => {
    const onClick = () => {
        localStorage.removeItem('token');
    };
    
    return (
        <HeaderContainer>
            <Link to='/'><img src={logo} alt='numbers logo'/></Link>
            <Link to='/signin'>{localStorage.getItem('token') ? <button onClick={onClick}>Sign Out</button> : <button>Sign In</button>}</Link>
        </HeaderContainer>
    );
};

export default Header;