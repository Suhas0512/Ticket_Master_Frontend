import React from 'react'
import { connect } from 'react-redux'
import TicketsForm from './Form'
import { startUpdateTicket } from '../../actions/ticketsAction'

function TicketEdit(props){
    const handleSubmit=(formData)=>{
        const id=props.match.params.id
        const redirect=()=>props.history.push('/tickets')
        props.dispatch(startUpdateTicket(formData,id,redirect))
    }
    return (
        <div className="col-md-6 offset-md-3">
        <br/>
        <br/>
        <h2 className="text-center">Edit Ticket</h2>
            <TicketsForm handleSubmit={handleSubmit}/>
        </div>
    )
}

export default connect()(TicketEdit)