import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class TicketsForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            code:'',
            customer:'',
            department:'',
            employees:'',
            message:'',
            priority:''
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
            code:this.state.code,
            customer:this.state.customer,
            department:this.state.department,
            employees:[].concat({_id:this.state.employees}),
            message:this.state.message,
            priority:this.state.priority,
            isResolved:false
        }
        this.props.handleSubmit(formData)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="code">code</label>
                    <input value={this.state.code} name="code" id="code" onChange={this.handleChange}className="form-control"/></div>

                    <div className="form-group">
                    <label htmlFor="customer">customer</label>
                    <select name="customer" id="customer" value={this.state.customer} onChange={this.handleChange}
                    className="form-control">
                    <option value="" hidden>Select your option</option>
                        {this.props.customer.map(ele=>{
                            return <option value={ele._id} key={ele._id} >{ele.name}</option>
                        })}
                    </select></div>

                    <div className="form-group">
                    <label htmlFor="department">department</label>
                    <select name="department" id="department" value={this.state.department} onChange={this.handleChange}
                    className="form-control">
                    <option value="" hidden>Select your option</option>
                        {this.props.department.map(ele=>{
                            return <option value={ele._id} key={ele._id} >{ele.name}</option>
                        })}
                    </select></div>

                    <div className="form-group">
                    <label htmlFor="employees">employees</label>
                    <select name="employees" id="employees" value={this.state.employees} onChange={this.handleChange}
                    className="form-control">
                    <option value="" hidden>Select your option</option>
                        {this.props.employees.filter(ele=>ele.department._id==this.state.department).map(ele=>{
                            return <option value={ele._id} key={ele._id} >{ele.name}</option>
                        })}
                    </select></div>

                    <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea rows="4" cols="50" name="message" id="message" value={this.state.message} onChange={this.handleChange}
                    className="form-control"></textarea></div>

                    <div className="form-group">
                    <label htmlFor="priority">priority</label>
                    <select name="priority" id="priority" value={this.state.priority} onChange={this.handleChange}
                    className="form-control">
                    <option value="" hidden>Select your option</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                    </select></div>
                    <input type="submit" value="submit" className="btn btn-primary"></input>
                </form>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        customer:state.customers,
        department:state.departments,
        employees:state.employees
    }
}
export default withRouter(connect(mapStateToProps)(TicketsForm))