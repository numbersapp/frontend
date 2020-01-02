import React from 'react';
import {Link} from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <h1>Sign Up</h1>
            <form>
                <label htmlFor='username'>Username</label>
                <input name='username'/>
                <label htmlFor='password'>Password</label>
                <input name='password'/>
            </form>
        </div>
    );
};

export default SignUp;