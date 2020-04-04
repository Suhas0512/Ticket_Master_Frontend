import React from 'react'
import {connect} from 'react-redux'
import {startRegister} from '../../actions/userAction'
class Register extends React.Component{
    constructor(){
        super()
        this.state={
            username:'',
            email:'',
            password:''
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
            username:this.state.username,
            password:this.state.password,
            email:this.state.email
        }
        const redirect=()=>{
           return this.props.history.push('/users/login')
        }
        this.props.dispatch(startRegister(formData,redirect))
    }
        render() {
            return (
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h2 className="text-center">Register with us</h2>
                        <form onSubmit={this.handleSubmit}>
    
                            <div className="form-group">
                                <input type="text" id="username" name="username" value={this.state.username} onChange={this.handleChange} className="form-control" placeholder="enter your name" />
                            </div>
    
                            <div className="form-group">
                                
                                <input type="text" id="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control" placeholder="enter your email" />
                            </div>
    
                            <div className="form-group">
                                <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control" placeholder="enter password (between 8 - 128)"/>
                            </div>
                            <input type="submit" value="register" className="btn btn-primary" />
                        </form>
                    </div>
                </div>
            )
        }
}

export default connect()(Register)