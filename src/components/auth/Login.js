import React from 'react'
import {connect} from 'react-redux'
import { startLogin } from '../../actions/userAction'
import { Link } from 'react-router-dom'
class Login extends React.Component{
    constructor(){
        super()
        this.state={
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
            password:this.state.password,
            email:this.state.email
        }
        const redirect=()=>{
            return this.props.history.push('/')
         }
        this.props.dispatch(startLogin(formData,redirect))
    }
    render(){
        return(
            <div className="row">
                <div className="col-md-6 offset-md-3">
                <h2 className="text-center">
                    Login
                </h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                    <input id="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control"
                    placeholder="enter your email"/></div><br/>

                    <div className="form-group">
                    <input id="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control"
                    placeholder="enter your password"/></div><br/>
                    <input type="submit" value="login" className="btn btn-primary btn-block"></input>
                    <p className="text-center"> or </p>
                        <p className="text-center">
                        <Link to="/users/register"> Create a free account</Link>
                        </p>
                </form>
                </div>
            </div>
        )
    }
}

export default connect()(Login)