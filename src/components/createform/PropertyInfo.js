import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {updateState} from '../../actions/Actions';
import styled from 'styled-components';

const PropertyInfoContainer = styled.form`
    width: 1024px;
    margin: 0 auto;
    margin-top:  64px;
    margin-bottom: 64px;
    display: flex;
    flex-direction: column;

    h2 {
        font-size: 2rem;
        font-weight: 700;
        color: #4a4a4a;
    }
`

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
    
    const goBack = () => {
        props.history.push('/dashboard');
    };

    const next = event => {
        event.preventDefault();
        console.log(props.propertyInfo);
        props.history.push('/rental/purchase');
    };

    const onChange = event => {
        setInput({...input, [event.target.name]: event.target.value});
    };

    const onSubmit = event => {
        event.preventDefault();
        console.log(props.propertyInfo);
        props.updateState({input});
        console.log(props.propertyInfo);
    };

    return (
        <PropertyInfoContainer onSubmit={onSubmit}>
            <h2>Property Info</h2>
            
            <label htmlFor='title'>Title</label>
            <input name='title' value={input.title} onChange={onChange}/>
            
            <label>Street Address</label>
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
            <input/>
            
            <button type='button' onClick={goBack}>Go Back</button>
            <button type='submit' onClick={next}>Next</button>
        </PropertyInfoContainer>
    );
};

const mapStateToProps = state => {
    return {
        propertyInfo: state.propertyInfo
    };
};

export default connect(mapStateToProps, {updateState})(PropertyInfo);