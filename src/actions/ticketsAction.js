import axios from '../config/axios'

export const setTickets=(tickets)=>{
    return{
        type:'SET_TICKETS',
        payload:tickets
    }
}
export const startSetTickets=()=>{
    return (dispatch)=>{
        axios.get('/tickets',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            const tickets=response.data
            dispatch(setTickets(tickets))
        })
    }
}

export const addTickets=(tickets)=>{
    return{
        type:'ADD_TICKETS',
        payload:tickets
    }
}
export const startAddTickets=(formData,redirect)=>{
    return (dispatch)=>{
        axios.post('/tickets',formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            const tickets=response.data
            dispatch(addTickets(tickets))
            redirect()
        })
    }
}

export const removeTickets=(id)=>{
    return{
        type:'REMOVE_TICKETS',
        payload:id
    }
}
export const startRemoveTickets=(id)=>{
    return (dispatch)=>{
        axios.delete(`/tickets/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            const tickets=response.data
            dispatch(removeTickets(tickets._id))
        })
    }
}

export const updateTicket=(ticket)=>{
    return{
        type:'UPDATE_TICKET',
        payload:ticket
    }
}
export const startUpdateTicket=(formData,id,redirect)=>{
    return(dispatch)=>{
        axios.put(`/tickets/${id}`,formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            const ticket=response.data
            dispatch(updateTicket(ticket))
            redirect()
        })
    }
}
export const updateStatus = (ticket) => {
    return {type:'UPDATE_STATUS',payload:ticket}
}

export const startUpdateStatus = (obj) => {
    return(dispatch)=>{
        axios.put(`/tickets/${obj.id}`,obj.status,{
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
        .then((response)=>{
            dispatch(updateStatus(response.data))
        })
    }
}