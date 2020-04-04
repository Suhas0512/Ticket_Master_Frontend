import React from 'react'
import { connect } from 'react-redux'
import { findEmployee } from '../../selectors/employeesSelector'
import { Link } from 'react-router-dom'
import { CircularProgress } from '@material-ui/core'
function EmployeesShow(props){
    const {_id,name,email,mobile,department}=props.employee||{}
    return(
        <div>
            {
                props.employee?(
                    <div>
                        <h2>Employees Show - {_id}</h2>
                        <p><b>{name}||{mobile}||{email}||{department.name}</b></p>
                        <Link to={`/employees/edit/${_id}`}>Edit</Link>||
                        <Link to="/employees">Back</Link>
                    </div>
                ):(
                    <div>
                        <CircularProgress/>
                    </div>
                )
            }
             
        </div>
    )
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return{
        employee:findEmployee(state.employees,id)
    }
}
export default connect(mapStateToProps)(EmployeesShow)