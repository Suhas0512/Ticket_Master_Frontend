import React from 'react'
import {connect} from 'react-redux'
import { startSetEmployees, startRemoveEmployees } from '../../actions/employeesAction'
import { Link } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'
function EmployeesList(props){
    const handleRemove=(id)=>{
        const confirmRemove=window.confirm("Are you sure")
        if(confirmRemove){
            props.dispatch(startRemoveEmployees(id))
        }
    }
    if(props.employees.length==0){
        props.dispatch(startSetEmployees())
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
                label: 'Department',
                field: 'department'
            },
            {
                label: 'Actions',
                field: 'actions'
            }
        ],
        rows: props.employees.map(employee => ({
            name: <Link to={`/employees/${employee._id}`}>{employee.name}</Link>, 
            email: employee.email,
            mobile: employee.mobile,
            department:employee.department.name,
            actions: <div>
                <Link to={`/employees/${employee._id}`} className="btn btn-link">show</Link>
                <button className="btn btn-danger btn-sm" onClick={() => {
                    handleRemove(employee._id)
                }}> remove </button>
            </div>
            
            
        }))
    }
    return(
        <div>
            <br/>
            <br/>
            <h2 className="text-center">Listing Employees - {props.employees.length}</h2>
            <MDBDataTable 
                   striped 
                   bordered
                   data={data}
                />
            <Link to="/employees/new" className="btn btn-primary">Add Employee</Link>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        employees:state.employees
    }
}
export default connect(mapStateToProps)(EmployeesList)