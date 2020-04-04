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