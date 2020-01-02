import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const LandingContainer = styled.div`
    height: 85vh;
    width: 1024px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        margin-bottom: 8px;
        font-size: 2.5rem;
        font-weight: 700;
        color: #4a4a4a;
    }

    h2 {
        margin-bottom: 16px;
        font-size: 1.5rem;
        font-weight: 600;
        color: #898989;
    }

    a {
        button {
            padding: 16px 128px;
            border: none;
            border-radius: 3px;
            background: linear-gradient(to right, #ff5e62, #ff9966);
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            font-family: 'Quicksand', sans-serif;
            font-size: 16px;
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

const Landing = () => {
    return (
        <LandingContainer>
            <h1>Numbers is the #1 real estate investment analyzer</h1>
            <h2>Making sure the numbers work and closing the deal</h2>
			<Link to='/signin'><button>Get Started</button></Link>
        </LandingContainer>
    );
};

export default Landing;