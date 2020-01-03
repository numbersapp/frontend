import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {axiosWithAuth} from './utils/axiosWithAuth';
import styled from 'styled-components';

const SignInContainer = styled.div`
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
            font-size: 16px;
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
            font-size: 16px;
            font-weight: 500;

            ::placeholder {
                color: #969696;
            }
        }

        .error {
            font-size: 16px;
            font-weight: 500;
            color: red;
        }

        button {
            margin-top: 8px;
            margin-bottom: 8px;
            padding: 8px;
            border: none;
            border-radius: 3px;
            outline: none;
            background: linear-gradient(to right, #ff5e62, #ff9966);
            font-family: 'Quicksand', sans-serif;
            font-size: 16px;
            font-weight: 500;
            color: whitesmoke;
            cursor: pointer;
            transition: 0.25s;

            :hover {
                opacity: 0.9;
            }
        }
    }
    
    a {
        text-decoration: none;

        p {
            font-size: 14px;
            font-weight: 500;
            color: #898989;
            transition: 0.25s;

            :hover {
                opacity: 0.75;
            }
        }
    }
`

const SignIn = props => {
    const [input, setInput] = useState({
        email: '',
        username: '',
        password: ''
    });
    const [error, setError] = useState('')
    
    const onChange = event => {
        setInput({...input, [event.target.name]: event.target.value});
    };

    const onSubmit = event => {
        event.preventDefault();
        axiosWithAuth().post('https://property-analysis.herokuapp.com/auth/login', input)
            .then(response => {
                setInput({email: '', username: '', password: ''});
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user_id', response.data.message.id);
                props.history.push('/dashboard');
            })
            .catch(error => setError(error));
    };
   
    return (
        <SignInContainer>
            <h1>Sign In</h1>
            <form autoComplete='off' onSubmit={onSubmit} spellCheck='false'>
                <label htmlFor='email'>Email</label>
                <input type='text' name='email' placeholder='ex. grant@cardonegroup.com' value={input.email} onChange={onChange}/>

                <label htmlFor='username'>Username</label>
                <input type='text' name='username' placeholder='ex. grantcardone' value={input.username} onChange={onChange}/>
                
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' placeholder='ex. igotfish' value={input.password} onChange={onChange}/>
                
                {error && <p className='error'>Invalid credentials</p>}

                <button type='submit'>Submit</button>
            </form>
            <Link to='/signup'><p>Don't have an account? Sign up</p></Link>
        </SignInContainer>
    );
};

export default SignIn;