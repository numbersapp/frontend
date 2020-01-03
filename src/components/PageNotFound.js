import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const PageNotFoundContainer = styled.div`
    height: 85vh;
    width: 1024px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        margin-bottom: 16px;
        font-size: 2rem;
        font-weight: 700;
        color: #4a4a4a;
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

const PageNotFound = () => {
    return (
        <PageNotFoundContainer>
            <h2>Page not found...</h2>
            <Link to='/'><button>Go Home</button></Link>
        </PageNotFoundContainer>
    );
};

export default PageNotFound;