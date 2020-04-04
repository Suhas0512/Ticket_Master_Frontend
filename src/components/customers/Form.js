import React from 'react' 
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { findCustomer } from '../../selectors/customerSelector'

class CustomerForm extends React.Component {
    constructor(props) {
        console.log('customer form constructor', props)
        super(props) 
        this.state = {
            name: props.customer ? props.customer.name : '',
            email: props.customer ? props.customer.email : '',
            mobile: props.customer ? props.customer.mobile : ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value 
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name: this.state.name, 
            mobile: this.state.mobile, 
            email: this.state.email 
        }
        this.props.handleSubmit(formData)
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                <div className="form-group">
                    <label htmlFor="name">name</label>
                    <input type="text" value={this.state.name} name="name" id="name" onChange={this.handleChange} className="form-control" />
                </div>

                <div className="form-group">
                        <label htmlFor="email">email</label>
                        <input type="text" value={this.state.email} name="email" id="email" onChange={this.handleChange} className="form-control" /> 
                </div>
                   
                <div className="form-group">
                        <label htmlFor="mobile">mobile</label>
                        <input type="text" value={this.state.mobile} name="mobile" id="mobile" onChange={this.handleChange} className="form-control" />
                </div>
                
                <input type="submit" value="submit" className="btn btn-primary" />
                </form>
            </div> 
        )
    }
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id 
    return { 
        customer: findCustomer(state.customers, id )
    }
}

export default withRouter(connect(mapStateToProps)(CustomerForm))