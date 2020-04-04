import React from 'react' 
import { connect } from 'react-redux'
import { startAddCustomer } from '../../actions/customersAction'
import CustomerForm from './Form'

function CustomerNew(props) {
    const handleSubmit = (formData) => {
        const redirect = () => props.history.push('/customers')
        props.dispatch(startAddCustomer(formData, redirect))
    }

    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h2 className="text-center">Add Customer</h2>
                <CustomerForm handleSubmit={handleSubmit}/>
            </div>
        </div>
    )
}

export default connect()(CustomerNew)