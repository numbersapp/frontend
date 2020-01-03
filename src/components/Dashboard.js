import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
    height: 85vh;
    width: 1024px;
    margin: 0 auto;
`

const Dashboard = props => {
    const onClick = () => {
        props.history.push('/create');
    };
    
    return (
        <DashboardContainer>
            <h1>Dashboard</h1>
            <h2>Rentals</h2>
            <button onClick={onClick}>+ Analyze New Property</button>
        </DashboardContainer>
    );
};

export default Dashboard;