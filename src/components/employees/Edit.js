import React from 'react'
import EmployeesForm from './Form'
import { connect } from 'react-redux'
import { startUpdateEmployees } from '../../actions/employeesAction'
import { Link } from '@material-ui/core'
function EmployeesEdit(props){
    const handleSubmit=(formData)=>{
        const id=props.match.params.id
        const redirect=()=>{
            props.history.push('/employees')
        }
        props.dispatch(startUpdateEmployees(formData,id,redirect))
    }
    return(
        <div className="col-md-6 offset-md-3">
        <br/>
        <br/>
        <h2 className="text-center">Edit Employee</h2>
            <EmployeesForm handleSubmit={handleSubmit}/>
            <Link to="/employees">Back</Link>
        </div>
    )
}
export default connect()(EmployeesEdit)