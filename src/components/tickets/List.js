import React from 'react'
import { connect } from 'react-redux'
import { startSetTickets, startRemoveTickets } from '../../actions/ticketsAction'
import { Link, withRouter } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'

function TicketsList(props){
    const handleRemove=(id)=>{
        const confirmRemove=window.confirm("Are you sure")
        if(confirmRemove){
            props.dispatch(startRemoveTickets(id))
        }
    }
    if(props.tickets.length==0){
        props.dispatch(startSetTickets())
    }
    const data = {
        columns: [
            {
                label: 'Code',
                field: 'code'
            },
            {
                label: 'Priority',
                field: 'priority'
            },
            {
                label: 'Messages',
                field: 'messages'
            },
            {
                label: 'Actions',
                field: 'actions'
            }
        ],
        rows: props.tickets.map(ticket => ({
            code:ticket.code,
            priority:ticket.priority,
            messages:ticket.message,
            actions: <div>
                <button className="btn btn-danger btn-sm" onClick={() => {
                    handleRemove(ticket._id)
                }}> remove </button>
            </div>
        }))
    }
    return(
        <div>
            <br/>
            <br/>
            <h2 className="text-center">Listing Tickets {props.tickets.length}</h2>
            <MDBDataTable 
                   striped 
                   bordered
                   data={data}
                />
            <Link to="/tickets/new" className="btn btn-primary">Add Tickets</Link>
        </div>
    )
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return{
        tickets : state.tickets,
        customer:state.customers,
        department:state.departments,
        employee:state.employees
    }
}
export default withRouter(connect(mapStateToProps)(TicketsList))