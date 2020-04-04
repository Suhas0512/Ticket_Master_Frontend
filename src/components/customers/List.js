import React from 'react'
import { Link }  from 'react-router-dom'
import { connect } from 'react-redux'
import { startSetCustomers, startRemoveCustomer } from '../../actions/customersAction'
import { MDBDataTable } from 'mdbreact'

function CustomerList(props){
    const handleRemove = (id) => {
        const confirmRemove =  window.confirm("Are you sure?")
        if(confirmRemove) {
            props.dispatch(startRemoveCustomer(id))
        }
    }
    if(props.customers.length == 0) {
        props.dispatch(startSetCustomers())
    }

    const data = {
        columns: [
            {
                label: 'Name',
                field: 'name'
            },
            {
                label: 'Email',
                field: 'email'
            },
            {
                label: 'Mobile',
                field: 'mobile'
            },
            {
                label: 'Actions',
                field: 'actions'
            }
        ],
        rows: props.customers.map(customer => ({
            name: <Link to={`/customers/${customer._id}`}>{customer.name}</Link>, 
            email: customer.email,
            mobile: customer.mobile,
            actions: <div>
                <Link to={`/customers/${customer._id}`} className="btn btn-link">show</Link>
                <button className="btn btn-danger btn-sm" onClick={() => {
                    handleRemove(customer._id)
                }}> remove </button>
            </div>
            
            
        }))
    }

    return (
        <div>
            <br/>
            <br/>
            <div className="row">
                <div className="col-md-12">
                <h2 className="text-center">Listing Customers - {props.customers.length} </h2>
                
                <MDBDataTable 
                   striped 
                   bordered
                   data={data}
                />
               
                <Link to="/customers/new" className="btn btn-primary">Add Customer</Link>
            </div>
            </div>

           
        </div> 
    )
}

const mapStateToProps = (state) => {
    return {
        customers: state.customers
    }
}

export default connect(mapStateToProps)(CustomerList)
