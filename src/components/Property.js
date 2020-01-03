import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'
import styled from 'styled-components';

const PropertyContainer = styled.div`
    width: 1024px;
    margin: 0 auto;
    margin-top: 64px;
    margin-bottom: 64px;
    display: flex;
    flex-direction: column;

    h2 {
        font-size: 1.5rem;
        font-weight: 600;
        color: #4a4a4a;
    }

    .description {
        margin-bottom: 16px;
        font-size: 16px;
        font-weight: 500;
        color: #898989;
    }

    h3 {
        margin-bottom: 8px;
    }

    .block {
        margin-bottom: 16px;
        
        p {
            font-size: 16px;
            font-weight: 500;
            color: #4a4a4a;
        }
    }

    h4 {
        margin-bottom: 4px;
    }

    .buttons {
        margin-top: 24px;
        display: flex;
        justify-content: space-evenly;
        
        button {
            padding: 8px 64px;
            border: none;
            border-radius: 3px;
            outline: none;
            background: linear-gradient(to right, #ff5e62, #ff9966);
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            font-family: 'Quicksand', sans-serif;
            font-size: 16px;
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

const Property = props => {
    const [input, setInput] = useState({});
    
    useEffect(() => {
        axiosWithAuth().get(`/property/${props.match.params.id}`)
            .then(response => setInput(response.data))
            .catch(error => console.log(error));
    }, []);

    const onClick = event => {
        event.preventDefault();
        axiosWithAuth().delete(`/property/${props.match.params.id}`)
            .then(response => props.history.push('/dashboard'))
            .catch(error => console.log(error));
    };

    return (
        <PropertyContainer>
            <h2>Report</h2>
            <p className='description'>The purchase breakdown, cash flow, and investment returns for this property</p>
            
            <h3>{input.title}</h3>
            
            <div className='block'>
                <p>MLS #{input.mls_no}</p>
                <p>{input.street_address}</p>
                <p>{input.city}, {input.state} {input.zipcode}</p>
                <p>Description: {input.description}</p>
            </div>

            <h4>Purchase & Rehab</h4>
            
            <div className='block'>
                <p>Purchase Price: {input.purchase_price}</p>
                <br/>
                <p>Down Payment: {input.down_payment}</p>
                <p>Estimated Repair Costs: {input.estimated_repair_costs}</p>
                <p>Closing Costs: {input.closing_costs}</p>
                <hr/>
                <p>Total Cash Needed: {Number(input.down_payment) + Number(input.estimated_repair_costs) + Number(input.closing_costs)}</p>
            </div>

            <h4>Valuation</h4>
            <div className='block'>
                <p>After Repair Value(ARV): {input.after_repair_value}</p>
            </div>

            <h4>Cash Flow</h4>
            <div className='block'>
                <p>Gross Monthly Rent: {input.gross_monthly_rent}</p>
                <p>Other Monthly Income: {input.other_monthly_income}</p>
                <hr/>
                <p>Operating Income: {Number(input.gross_monthly_rent) + Number(input.other_monthly_income)}</p>
                <br/>
                <p>Monthly Fixed Landlord Expenses: {input.monthly_fixed_expenses}</p>
                <p>Monthly Variable Landlord Expenses: {input.monthly_variable_expenses}</p>
                <hr/>
                <p>Operating Expenses: {Number(input.monthly_fixed_expenses) + Number(input.monthly_variable_expenses)}</p>
                <br/>
                <p>Operating Income: {Number(input.gross_monthly_rent) + Number(input.other_monthly_income)}</p>
                <p>Operating Expenses: ({Number(input.monthly_fixed_expenses) + Number(input.monthly_variable_expenses)})</p>
                <hr/>
                <p>Net Operating Income: {(Number(input.gross_monthly_rent) + Number(input.other_monthly_income)) - (Number(input.monthly_fixed_expenses) + Number(input.monthly_variable_expenses))}</p>
                <p>Loan Payments: ({})</p>
                <hr/>
                <p>Cash Flow: {}</p>
            </div>

            <h4>Investment Returns</h4>
            <div className='block'>
                <p>Rent to Value: {(Number(input.gross_monthly_rent) * 12) / Number(input.purchase_price)}</p>
                <p>Cash on Cash Return: {Number('cash flow x 12') / Number(input.down_payment) + Number(input.estimated_repair_costs) + Number(input.closing_costs)}%</p>
                <p>Return on Investment: {}</p>
            </div>

            <div className='buttons'>
                <button onClick={() => props.history.push('/dashboard')}>Go Back to Dashboard</button>
                <button onClick={onClick}>Delete</button>
            </div>
        </PropertyContainer>
    );
};

export default Property;