import React from 'react'
import {connect} from 'react-redux'
import {startSetTickets} from '../../actions/ticketsAction'
import PendingTicket from './PendingTicket'
import CompletedTicket from './CompletedTicket'
import {withRouter,Link} from 'react-router-dom'

class Tickets extends React.Component{
    constructor(props){
        super(props)
        this.state={
            pending : false,
            complete : false
        }
    }
    handlePending = () => {
        this.setState({
            pending : true,
            complete : false
        })
        
    }
     handleComplete = () =>{
        this.setState({
            pending : false,
            complete : true
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
       this.setState({
        pending : false,
        complete : false
       })
    }
    render(){
        if(this.props.tickets.length == 0) {
            this.props.dispatch(startSetTickets())
        }
    return(
        <div className="container">
            <h2>Listing Tickets - {this.props.tickets ? this.props.tickets.length : 'loading'}</h2>
            <form onSubmit={this.handleSubmit} align="right">
                <input type="text" value={this.state.search} onChange={this.handleChange} /><input type="submit" value="search" style={{background:"green",color:"white"}} />
                </form>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light" >
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
              <li className="nav-item active">
              <button class="nav-link" onClick={this.handlePending}>Pending<span class="sr-only">(current)</span></button>
              </li>
              <li className="nav-item active">
              <button class="nav-link" onClick={this.handleComplete}>Completed</button>
              </li>
              </ul>
              </div>
              </nav>
              
              {
                  this.state.pending && <PendingTicket /> 
              }
              {
                  this.state.complete && <CompletedTicket />
              }

              <Link to="/ticket/new">add ticket</Link>
              <br />
              <br />
        </div>
    )
    }
}

const mapStateToProps = (state) => {
    return {
        tickets : state.tickets  
    }
}

export default withRouter(connect(mapStateToProps)(Tickets))