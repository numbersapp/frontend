const initialState = {
    propertyInfo: {
        user_id: null,
        title: '',
        street_address: '',
        city: '',
        state: '',
        zipcode: null,
        mls_no: null,
        description: ''
    },
    
    purchase: {
        purchase_price: null,
        estimated_repair_costs: null,
        after_repair_value: null,
        closing_costs: null,
        
        use_financing: true,
        loan_type: '',
        down_payment: null,
        interest_rate: null,
        loan_term: null,
        pmi: null
    },
    
    expenses: {
        gross_monthly_rent: null,
        other_monthly_income: null,
        monthly_fixed_expenses: null,
        monthly_variable_expenses: null,
        
        annual_property_value_growth: null,
        annual_income_growth: null,
        annual_expenses_growth: null,
        sales_expense: null
    }
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    };
};