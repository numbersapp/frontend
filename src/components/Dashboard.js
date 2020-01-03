import React, {useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import styled from 'styled-components';

const DashboardContainer = styled.div`

    width: 1024px;
    margin: 0 auto;
    margin-top: 64px;
    margin-bottom: 64px;
    display: flex;
    flex-direction: column;

    h1 {
        margin-bottom: 32px;
        font-size: 2rem;
        font-weight: 700;
        color: #4a4a4a;
    }

    h2 {
        font-size: 1.5rem;
        font-weight: 600;
        color: #4a4a4a;
    }

    p {
        margin-bottom: 16px;
        font-size: 16px;
        font-weight: 500;
        color: #898989;
    }

    .property-container {
        margin-bottom: 16px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        button {
            height: 165.05px;
            width: 293.16px;
            margin-right: 16px;
            margin-bottom: 16px;
            background: white;
            border: none;
            border-radius: 3px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            outline: none;
            font-family: 'Quicksand', sans-serif;
            font-size: 16px;
            font-weight: 500;
            color: #4a4a4a;
            transition: 0.25s;
            cursor: pointer;
    
            :hover {
                box-shadow: none;
            }

            p {
                margin-bottom: 0;
                color: #4a4a4a;
            }
        }

        .analyze-new-property {
            background: linear-gradient(to right, #ff5e62, #ff9966);;
            color: whitesmoke;
        }
    }
`

const Dashboard = props => {
    useEffect(() => {
        axiosWithAuth().get('https://property-analysis.herokuapp.com/property')
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }, []);
    
    return (
        <DashboardContainer>
            <h1>Dashboard</h1>
            <h2>Rentals</h2>
            <p>Properties you plan to buy and hold for long-term cash flow</p>
            <div className='property-container'>
                
                <button>
                    <p>123 Blueberry Farms Road,</p>
                    <p>New Jersey, NJ 12345</p>
                </button>
                <button>
                    <p>House Down the Street</p>
                </button>
                <button>
                    <p>123 Blueberry Farms Road,</p>
                    <p>New Jersey, NJ 12345</p>
                </button>
                <button>
                    <p>123 Blueberry Farms Road,</p>
                    <p>New Jersey, NJ 12345</p>
                </button>
                <button className='analyze-new-property' onClick={() => props.history.push('/rental/propertyinfo')}>+ Analyze New Property</button>
            </div>
            
            <h2>BRRRRs</h2>
            <p>Properties you plan to buy, rehab, rent, refinance, and repeat</p>
            <div className='property-container'>
                <button className='analyze-new-property' onClick={() => props.history.push('/comingsoon')}>+ Analyze New Property</button>
            </div>

            <h2>Fix and Flips</h2>
            <p>Properties you plan to fix and flip for a profit</p>
            <div className='property-container'>
                <button className='analyze-new-property' onClick={() => props.history.push('/comingsoon')}>+ Analyze New Property</button>
            </div>

            <h2>Wholesales</h2>
            <p>Properties you plan to wholesale</p>
            <div className='property-container'>
                <button className='analyze-new-property' onClick={() => props.history.push('/comingsoon')}>+ Analyze New Property</button>
            </div>

            <h2>Mortgage Calculator</h2>
            <p>Calculate the ammortization of a loan</p>
            <div className='property-container'>
                <button className='analyze-new-property' onClick={() => props.history.push('/comingsoon')}>+ Analyze New Property</button>
            </div>
        </DashboardContainer>
    );
};

export default Dashboard;