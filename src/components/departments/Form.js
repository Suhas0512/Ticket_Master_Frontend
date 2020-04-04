import React from 'react'
import { connect } from 'react-redux'
import {startAddDepartment} from '../../actions/departmentsAction'
class DepartmentForm extends React.Component{
    constructor(){
        super()
        this.state={
            name:''
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
            name:this.state.name
        }
        this.props.dispatch(startAddDepartment(formData))
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">name</label>
                    <input id="name" value={this.state.name} onChange={this.handleChange} name="name" className="form-control"></input><br/>
                    <input type="submit" value="submit" class="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect()(DepartmentForm)