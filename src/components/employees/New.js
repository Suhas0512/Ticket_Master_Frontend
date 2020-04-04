import React from 'react'
import EmployeesForm from './Form'
import { connect } from 'react-redux'
import { startAddEmployees } from '../../actions/employeesAction'
function EmployeesNew(props){
    const handleSubmit=(formData)=>{
        const redirect=()=>props.history.push('/employees')
        props.dispatch(startAddEmployees(formData,redirect))
    }
    return(
        <div className="col-md-6 offset-md-3">
            <br/>
            <br/>
            <h2 className="text-center">Add Employee</h2>
            <EmployeesForm handleSubmit={handleSubmit}/>
        </div>
    )
}
export default connect() (EmployeesNew)