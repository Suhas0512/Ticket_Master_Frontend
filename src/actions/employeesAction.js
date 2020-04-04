import axios from '../config/axios'


export const setEmployees=(employess)=>{
    return{
        type:'SET_EMPLOYEES',
        payload:employess
    }
}
export const startSetEmployees=()=>{
    return (dispatch)=>{
        axios.get('/employees',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            const employees=response.data
            dispatch(setEmployees(employees))
        })
    }
}

export const addEmployees=(employees)=>{
    return{
        type:'ADD_EMPLOYEES',
        payload:employees
    }
}
export const startAddEmployees=(formData,redirect)=>{
    return (dispatch)=>{
        axios.post('/employees',formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            const employees=response.data
            dispatch(addEmployees(employees))
            redirect()
        })
    }
}
export const removeEmployees=(id)=>{
    return{
        type:'REMOVE_EMPLOYEES',
        payload:id
    }
}
export const startRemoveEmployees=(id)=>{
    return (dispatch)=>{
        axios.delete(`/employees/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            const employees=response.data
            dispatch(removeEmployees(employees._id))
        })
    }
}
export const updateEmployees=(employees)=>{
    return{
        type:'UPDATE_EMPLOYEES',
        payload:employees
    }
}
export const startUpdateEmployees=(formData,id,redirect)=>{
    return (dispatch)=>{
        axios.put(`/employees/${id}`,formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            const employees=response.data
            dispatch(updateEmployees(employees))
            redirect()
        })
    }
}