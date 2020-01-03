import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import styled from 'styled-components';

const RentalFormContainer = styled.div`
    width: 1024px;
    margin: 0 auto;
    margin-top: 64px;
    margin-bottom: 64px;
    
    form {
        h1 {
            margin-bottom: 32px;
            font-size: 2rem;
            font-weight: 700;
            color: #4a4a4a
        }

        .propertyInfo {
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

            label {
                font-size: 16px;
                font-weight: 500;
                color: #4a4a4a;
            }

            input {
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
        }

        .purchase {
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

            label {
                font-size: 16px;
                font-weight: 500;
                color: #4a4a4a;
            }

            input {
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

            .use_financing {
                margin: 8px 0;
                display: flex;

                label {
                    margin-right: 8px;
                }
            }

            select {
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
        }

        .expenses {
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

            label {
                font-size: 16px;
                font-weight: 500;
                color: #4a4a4a;
            }

            input {
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
        }
    }

    .report {
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
    }
`

const RentalForm = props => {
    const [section, setSection] = useState({
        propertyInfo: true,
        purchase: false,
        expenses: false,
        report: false
    });

    const [input, setInput] = useState({
        user_id: localStorage.getItem('user_id'),
        
        title: '',
        street_address: '',
        city: '',
        state: '',
        zipcode: '',
        mls_no: '',
        description: '',

        purchase_price: '',
        estimated_repair_costs: '',
        after_repair_value: '',
        closing_costs: '',
        
        use_financing: '',
        loan_type: 'amortized',
        down_payment: '',
        interest_rate: '',
        loan_term: '',
        pmi: '',

        gross_monthly_rent: '',
        other_monthly_income: '',
        monthly_fixed_expenses: '',
        monthly_variable_expenses: '',
        
        annual_property_value_growth: '',
        annual_income_growth: '',
        annual_expenses_growth: '',
        sales_expense: ''
    });

    const onChange = event => {
        setInput({...input, [event.target.name]: event.target.value});
    };

    const onSubmit = event => {
        event.preventDefault();
        axiosWithAuth().post('https://property-analysis.herokuapp.com/property', input)
            .then(response => setSection({expenses: false, report: true}))
            .catch(error => console.log(error, input));
    };

    return (
        <RentalFormContainer>
            <form autoComplete='off' spellCheck='false' onSubmit={onSubmit}>
                <h1>Rental</h1>
                {section.propertyInfo && <div className='propertyInfo'>
                    <h2>Property Info</h2>
                    <p className='description'>Enter basic information about the property</p>

                    <label htmlFor='title'>Title</label>
                    <input name='title' type='text' value={input.title} onChange={onChange}/>

                    <label htmlFor='mls_no'>MLS Number</label>
                    <input name='mls_no' type='text' value={input.mls_no} onChange={onChange}/>

                    <label htmlFor='description'>Description</label>
                    <input name='description' type='text' value={input.description} onChange={onChange}/>

                    <label htmlFor='street_address'>Street Address</label>
                    <input name='street_address' type='text' value={input.street_address} onChange={onChange}/>

                    <label htmlFor='city'>City/Town</label>
                    <input name='city' type='text' value={input.city} onChange={onChange}/>

                    <label htmlFor='state'>State</label>
                    <input name='state' type='text' value={input.state} onChange={onChange}/>

                    <label htmlFor='zipcode'>Postal Code</label>
                    <input name='zipcode' type='text' value={input.zipcode} onChange={onChange}/>
                    
                    <div className='buttons'>
                        <button onClick={() => props.history.push('/dashboard')}>Back to Dashboard</button>
                        <button onClick={() => setSection({propertyInfo: false, purchase: true})}>Next</button>
                    </div>
                </div>}

                {section.purchase && <div className='purchase'>
                    <h2>Purchase</h2>
                    <p className='description'>Enter details about the purchase of the property, and the loan if you're not paying cash</p>

                    <label htmlFor='purchase_price'>Purchase Price</label>
                    <input name='purchase_price' type='number' value={input.purchase_price} onChange={onChange}/>

                    <label htmlFor='estimated_repair_costs'>Estimated Repair Costs</label>
                    <input name='estimated_repair_costs' type='number' value={input.estimated_repair_costs} onChange={onChange}/>

                    <label htmlFor='after_repair_value'>After Repair Value</label>
                    <input name='after_repair_value' type='number' value={input.after_repair_value} onChange={onChange}/>

                    <label htmlFor='closing_costs'>Closing Costs</label>
                    <input name='closing_costs' type='number' value={input.closing_costs} onChange={onChange}/>
                    
                    <div className='use_financing'>
                        <label htmlFor='use_financing'>Will you be financing?</label>
                        <input name='use_financing' type='checkbox' value={input.use_financing} onChange={() => setInput({...input, use_financing: !input.use_financing})} checked={input.use_financing}/>
                    </div>

                    {input.use_financing && 
                        <>
                            <label htmlFor='loan_type'>Loan Type</label>
                            <select name='loan_type' value={input.loan_type} onChange={onChange}>
                                <option value='amortized'>Amortized</option>
                                <option value='interest_only'>Interest Only</option>
                            </select>

                            <label htmlFor='down_payment'>Down Payment</label>
                            <input name='down_payment' type='number' value={input.down_payment} onChange={onChange}/>

                            <label htmlFor='loan_term'>Loan Term</label>
                            <input name='loan_term' type='number' value={input.loan_term} onChange={onChange}/>

                            <label htmlFor='interest_rate'>Interest Rate</label>
                            <input name='interest_rate' type='number' value={input.interest_rate} onChange={onChange}/>

                            <label htmlFor='pmi'>PMI</label>
                            <input name='pmi' type='number' value={input.pmi} onChange={onChange}/>
                        </>
                    }
                    <div className='buttons'>
                        <button onClick={() => setSection({propertyInfo: true, purchase: false})}>Previous</button>
                        <button onClick={() => setSection({purchase: false, expenses: true})}>Next</button>
                    </div>
                </div>}

                {section.expenses && <div className='expenses'>
                    <h2>Expenses</h2>
                    <p className='description'>Enter details about expenses of the property</p>

                    <label htmlFor='gross_monthly_rent'>Gross Monthly Rent</label>
                    <input name='gross_monthly_rent' type='number' value={input.gross_monthly_rent} onChange={onChange}/>

                    <label htmlFor='other_monthly_income'>Other Monthly Income</label>
                    <input name='other_monthly_income' type='number' value={input.other_monthly_income} onChange={onChange}/>

                    <label htmlFor='monthly_fixed_expenses'>Monthly Fixed Expenses</label>
                    <input name='monthly_fixed_expenses' type='number' value={input.monthly_fixed_expenses} onChange={onChange}/>

                    <label htmlFor='monthly_variable_expenses'>Monthly Variable Expenses</label>
                    <input name='monthly_variable_expenses' type='number' value={input.monthly_variable_expenses} onChange={onChange}/>

                    <label htmlFor='annual_property_value_growth'>Annual Property Value Growth</label>
                    <input name='annual_property_value_growth' type='number' value={input.annual_property_value_growth} onChange={onChange}/>

                    <label htmlFor='annual_income_growth'>Annual Income Growth</label>
                    <input name='annual_income_growth' type='number' value={input.annual_income_growth} onChange={onChange}/>

                    <label htmlFor='annual_expenses_growth'>Annual Expenses Growth</label>
                    <input name='annual_expenses_growth' type='number' value={input.annual_expenses_growth} onChange={onChange}/>

                    <label htmlFor='sales_expense'>Sales Expense</label>
                    <input name='sales_expense' type='number' value={input.sales_expense} onChange={onChange}/>
                    
                    <div className='buttons'>
                        <button onClick={() => setSection({propertyInfo: false, purchase: true})}>Previous</button>
                        <button type='submit'>Submit</button>
                    </div>
                </div>}
            </form>

            {section.report && <div className='report'>
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
                    <button onClick={() => setSection({expenses: true, report: false})}>Go Back and Edit</button>
                    <button onClick={() => props.history.push('/dashboard')}>Save and Go to Dashboard</button>
                </div>
            </div>}
        </RentalFormContainer>
    );
};

export default RentalForm;