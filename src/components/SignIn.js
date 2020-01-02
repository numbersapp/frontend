import React from 'react';
import {Link} from 'react-router-dom';

const SignIn = () => {
    return (
        <div>
            <h1>Sign In</h1>
            <form>
                <label htmlFor='username'>Username</label>
                <input name='username'/>
                <label htmlFor='password'>Password</label>
                <input name='password'/>
            </form>
            <Link to='/signup'><p>Don't have an account? Sign up</p></Link>
        </div>
    );
};

export default SignIn;