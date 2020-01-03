import React, {useState, useEffect} from 'react';

const Purchase = props => {
    return (
        <>
            <h2>Purchase</h2>
            
            <button onClick={() => props.history.push('/rental/propertyinfo')}>Go Back</button>
        </>
    );
};

export default Purchase;