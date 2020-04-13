import React from 'react'
import { connect } from 'react-redux'
import {startGetDepartments,startRemoveDepartment} from '../../actions/departmentsAction'
import DepartmentForm from './Form'
import { Link } from 'react-router-dom'
function DepartmentList(props){
    if(props.departments.length==0){
        props.dispatch(startGetDepartments())
    }
    const handleRemove=(id)=>{
        const confirmRemove=window.confirm("are you sure")
        if(confirmRemove){
            props.dispatch(startRemoveDepartment(id))
        }
    }
    return(
        <div>
            <br/>
            <br/>
            <div className="row">
                <div className="col-md-7">
                    <h2 className="text-center">Listing Departments - {props.departments.length}</h2>
                    <ul className="list-group">
                    {props.departments.map(department=>{
                        return <li key={department._id} className="list-group-item">
                            {department.name}
                            <button className="float-right btn btn-danger" onClick={()=>{handleRemove(department._id)}}>remove</button>
                        </li>
                    })}
                </ul>
                </div>

                <div className="col-md-5">
                <h2 className="text-center">Add Departments</h2>
                <DepartmentForm/> 
                </div>
            </div> 
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        departments:state.departments
    }
}
export default connect(mapStateToProps) (DepartmentList)