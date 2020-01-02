import React from 'react';
import styled from 'styled-components';

const SignUpContainer = styled.div`
    height: 85vh;
    width: 1024px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        margin-bottom: 16px;
        font-size: 2rem;
        font-weight: 700;
        color: #4a4a4a;
    }

    form {
        display: flex;
        flex-direction: column;

        label {
            font-size: 14px;
            font-weight: 500;
            color: #898989;
        }

        input {
            width: 342px;
            margin-bottom: 8px;
            padding: 8px;
            background: white;
            border: 1px solid #969696;
            border-radius: 3px;
            outline: none;
            font-family: 'Quicksand', sans-serif;
            font-size: 14px;
            font-weight: 500;

            ::placeholder {
                color: #969696;
            }
        }

        button {
            height: 34px;
            margin-bottom: 8px;
            border: none;
            border-radius: 3px;
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

const SignUp = () => {
    return (
        <SignUpContainer>
            <h1>Sign Up</h1>
            <form autoComplete='off'>
                <label htmlFor='username'>Username</label>
                <input name='username' placeholder='ex. grantcardone'/>
                
                <label htmlFor='password'>Password</label>
                <input name='password' placeholder='ex. igotfish'/>

                <button>Submit</button>
            </form>
        </SignUpContainer>
    );
};

export default SignUp;