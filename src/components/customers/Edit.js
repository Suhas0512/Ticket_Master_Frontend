import React from 'react'
import CustomerForm from './Form'
import { connect } from 'react-redux'
import {startUpdateCustomer} from '../../actions/customersAction'

function CustomerEdit(props){
    const handleSubmit=(formData)=>{
        const id=props.match.params.id
        const redirect=()=>props.history.push('/customers')
        props.dispatch(startUpdateCustomer(formData,id,redirect))
    }
    return (
        <div className="col-md-6 offset-md-3">
        <br/>
        <br/>
        <h2 className="text-center">Edit Customer</h2>
            <CustomerForm handleSubmit={handleSubmit}/>
        </div>
    )
}

export default connect()(CustomerEdit)