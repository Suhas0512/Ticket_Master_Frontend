import React from 'react'
import {connect} from 'react-redux'
import { findEmployee } from '../../selectors/employeesSelector'
import { withRouter } from 'react-router-dom'

class EmployeesForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:props.employee?props.employee.name:'',
            email:props.employee?props.employee.email:'',
            mobile:props.employee?props.employee.mobile:'',
            department:this.props.employee?this.props.employee.department._id:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile,
            department:this.state.department
        }
        this.props.handleSubmit(formData)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                    <label htmlFor="name">name</label>
                    <input value={this.state.name} name="name" id="name" onChange={this.handleChange}
                    className="form-control"></input>
                    </div>
                    <div className="form-group">
                    <label htmlFor="email">email</label>
                    <input value={this.state.email} name="email" id="email" onChange={this.handleChange}
                    className="form-control"></input>
                    </div>
                    <div className="form-group">
                    <label htmlFor="mobile">mobile</label>
                    <input value={this.state.mobile} name="mobile" id="mobile" onChange={this.handleChange}
                    className="form-control"></input>
                    </div>
                    <div className="form-group">
                    <label htmlFor="department">Department</label>
                    <select name="department" id="department" value={this.state.department} onChange={this.handleChange}
                    className="form-control">
                    <option value="" selected disabled hidden>Select your option</option>
                        {this.props.department.map(ele=>{
                            return <option value={ele._id} key={ele._id}>{ele.name}</option>
                        })}
                    </select></div>
                    <input type="submit" value="submit" className="btn btn-primary"></input>
                </form>
            </div>
        )
    }
}
const mapStateToProps=(state,props)=>{
    const id =props.match.params.id
    return{
        employee:findEmployee(state.employees,id),
        department:state.departments
    }
}
export default withRouter(connect(mapStateToProps)(EmployeesForm))