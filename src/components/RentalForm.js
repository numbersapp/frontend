import React, {useState} from 'react';
import styled from 'styled-components';

const RentalFormContainer = styled.form`
    width: 1024px;
    margin: 0 auto;
    margin-top: 64px;
    margin-bottom: 64px;

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
        zipcode: null,
        mls_no: null,
        description: '',

        purchase_price: null,
        estimated_repair_costs: null,
        after_repair_value: null,
        closing_costs: null,
        
        use_financing: true,
        loan_type: 'amortized',
        down_payment: null,
        interest_rate: null,
        loan_term: null,
        pmi: null,

        gross_monthly_rent: null,
        other_monthly_income: null,
        monthly_fixed_expenses: null,
        monthly_variable_expenses: null,
        
        annual_property_value_growth: null,
        annual_income_growth: null,
        annual_expenses_growth: null,
        sales_expense: null
    });

    const onChange = event => {
        setInput({...input, [event.target.name]: event.target.value});
    };

    

    return(
        <RentalFormContainer autoComplete='off' spellCheck='false'>
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

                <label htmlFor='city'>City</label>
                <input name='city' type='text' value={input.city} onChange={onChange}/>

                <label htmlFor='state'>State</label>
                <input name='state' type='text' value={input.state} onChange={onChange}/>

                <label htmlFor='zipcode'>Zipcode</label>
                <input name='zipcode' type='text' value={input.zipcode} onChange={onChange}/>
                
                <div className='buttons'>
                    <button onClick={() => props.history.push('/dashboard')}>Back to Dashboard</button>
                    <button onClick={() => setSection({propertyInfo: false, purchase: true})}>Next</button>
                </div>
            </div>}

            {section.purchase && <div className='purchase'>
                <h2>Purchase</h2>
                <p className='description'>Enter details about the purchase of the property, and the loan if you're not paying cash.</p>

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

                <label htmlFor='sales_expenses'>Sales Expense</label>
                <input name='sales_expenses' type='number' value={input.sales_expenses} onChange={onChange}/>
                
                <div className='buttons'>
                    <button onClick={() => setSection({propertyInfo: false, purchase: true})}>Previous</button>
                    <button onClick={() => setSection({expenses: false, report: true})}>Submit</button>
                </div>
            </div>}

            {section.report && <div className='report'>
                <h2>Report</h2>
                <button onClick={() => setSection({expenses: true, report: false})}>Go Back and Edit</button>
                <button onClick={() => props.history.push('/dashboard')}>Back to Dashboard</button>
            </div>}
        </RentalFormContainer>
    );
};

export default RentalForm;