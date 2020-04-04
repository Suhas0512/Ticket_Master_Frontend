import axios from '../config/axios'
import Swal from 'sweetalert2'
export const setCustomers=(customers)=>{
    return{
        type:'SET_CUSTOMERS',
        payload:customers
    }
}
export const startSetCustomers=()=>{
    return(dispatch)=>{
        axios.get('/customers',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            const customers=response.data
            dispatch(setCustomers(customers))
        })
    }
}

export const addCustomer=(customer)=>{
    return{
        type:'ADD_CUSTOMER',
        payload:customer
    }
}

export const startAddCustomer=(formData,redirect)=>{
    return(dispatch=>{
        axios.post('/customers',formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            console.log(response.data)
            if(response.data.hasOwnProperty('errors'))
            {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!'
                  })
            }else{
            const customer=response.data
            dispatch(addCustomer(customer))
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })              
            redirect()
        }
        })
    })
}
export const removeCustomer=(id)=>{
    return{
        type:'REMOVE_CUSTOMER',
        payload:id
    }
}

export const startRemoveCustomer=(id)=>{
    return (dispatch)=>{
        axios.delete(`/customers/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            const customer=response.data
            dispatch(removeCustomer(customer._id))
        })
    }
}
export const updateCustomer=(customer)=>{
    return{
        type:'UPDATE_CUSTOMER',
        payload:customer
    }
}
export const startUpdateCustomer=(formData,id,redirect)=>{
    return(dispatch)=>{
        axios.put(`/customers/${id}`,formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            const customer=response.data
            dispatch(updateCustomer(customer))
            redirect()
        })
    }
}
