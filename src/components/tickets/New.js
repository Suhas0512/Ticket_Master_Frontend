import React from 'react'
import TicketsForm from './Form'
import { connect } from 'react-redux'
import { startAddTickets } from '../../actions/ticketsAction'
function TicketsNew(props){
    const handleSubmit=(formData)=>{
        const redirect=()=>props.history.push('/tickets')
        props.dispatch(startAddTickets(formData,redirect))
    }
    return(
        <div className="col-md-6 offset-md-3">
        <br/>
        <br/>
        <h2 className="text-center">Add Tickets</h2>
            <TicketsForm handleSubmit={handleSubmit}/>
        </div>
    )
}

export default connect() (TicketsNew)