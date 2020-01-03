import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

const PropertyInfo = props => {
    const [input, setInput] = useState({
        title: '',
        street_address: '',
        city: '',
        state: '',
        zipcode: null,
        mls_no: null,
        description: ''
    });
    
    useEffect(() => {
        
    }, []);
    
    const goBack = () => {
        props.history.push('/dashboard');
    };

    const next = event => {
        event.preventDefault();
        props.history.push('/create/purchase');
    };

    const onChange = event => {
        setInput({...input, [event.target.name]: event.target.value});
    };

    const onSubmit = event => {
        event.preventDefault();
    };

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor='title'>Title</label>
            <input name='title' value={input.title} onChange={onChange}/>
            {/* <label>Street Address</label>
            <input/>
            <label>City</label>
            <input/>
            <label>State</label>
            <input/>
            <label>Zipcode</label>
            <input/>
            <label>MLS Number</label>
            <input/>
            <label>Description</label>
            <input/> */}
            <button onClick={goBack}>Go Back</button>
            <button type='submit' onClick={next}>Next</button>
        </form>
    );
};

const mapStateToProps = state => {
    return {
        propertyInfo: state.propertyInfo
    };
};

export default connect(mapStateToProps)(PropertyInfo);