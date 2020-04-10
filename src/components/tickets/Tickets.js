import React from 'react'
import {connect} from 'react-redux'
import {startSetTickets} from '../../actions/ticketsAction'
import PendingTicket from './PendingTicket'
import CompletedTicket from './CompletedTicket'
import {withRouter,Link} from 'react-router-dom'
import PieChart from './PieChart'
import LinearProgress from "@material-ui/core/LinearProgress";
import BarChart from './BarChart'

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

                <Link to="/tickets/new" className="btn btn-primary">Add Tickets</Link>
              <br />
              <br />
              <h3>Progress bar indicating completed tickets</h3>
              <LinearProgress variant="determinate" value={this.props.tickets.filter(tick=>tick.isResolved).length/this.props.tickets.length*100} color="secondary"/><br/>
              <h3 align="center">Data on Pending Tickets</h3>
              <div className="container">
                  <div className="row">
                      <div className="col-md-6">
                         <PieChart />
                      </div>
                      <div className="col-md-6">
                         <BarChart />
                      </div>
                  </div>

              </div>
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