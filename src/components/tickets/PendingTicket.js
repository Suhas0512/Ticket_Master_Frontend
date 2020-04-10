import React from 'react'
import { connect } from 'react-redux'
import { startSetTickets, startRemoveTickets, startUpdateStatus } from '../../actions/ticketsAction'
import { Link, withRouter } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'

function PendingTicket(props){
    console.log(props)
    const handleRemove=(id)=>{
        const confirmRemove=window.confirm("Are you sure")
        if(confirmRemove){
            props.dispatch(startRemoveTickets(id))
        }
    }
    const handleChange = (id) => {
        const formData = {
            isResolved: true
        }
        props.dispatch(startUpdateStatus({id,formData}))
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
                label: 'Customer',
                field: 'customer'
            },
            {
                label: 'Department',
                field: 'department'
            },
            {
                label: 'Employees',
                field: 'employees'
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
            },
            {
                label:'Status',
                field:'status'
            }
        ],
        rows: props.tickets.map(ticket => 
            !ticket.isResolved && 
            ({
            code:ticket.code,
            customer:ticket ? props.customer.find(cust=>cust._id == ticket.customer).name:'loading',
            department:ticket ? props.department.find(depart=>depart._id == ticket.department).name:"loading",
            employees:props.employee.length !==0 ? ticket.employees.map(tick=>{
                return props.employee.find(emp=>emp._id == tick._id).name
            }) : 'loading',
            messages:ticket.message,
            priority:ticket.priority,
            actions: <div><Link to={`/tickets/edit/${ticket._id}`} className="btn btn-link">Edit</Link>
                <button className="btn btn-danger btn-sm" onClick={() => {
                    handleRemove(ticket._id)
                }}> remove </button>
            </div>,
            status:<input type="checkbox" checked={ticket.isResolved} onChange={()=>{handleChange(ticket._id)}} />
        }))
    }
    return(
        <div>
            <br/>
            <br/>
            <h2 className="text-center">Listing Tickets {props.tickets.length}</h2>
            {props.tickets.length!=0&&props.customer.length!=0&&props.department.length!=0&&props.employee.length!=0&&
            <MDBDataTable 
                   striped 
                   bordered
                   data={data}
                />}
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        tickets : state.tickets,
        customer:state.customers,
        department:state.departments,
        employee:state.employees
    }
}
export default withRouter(connect(mapStateToProps)(PendingTicket))