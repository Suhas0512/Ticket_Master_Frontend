import axios from '../config/axios'
import Swal from 'sweetalert2'

export const setDepartments=(departments)=>{
    return {
        type:'SET_DEPARTMENTS',
        payload:departments
    }
}
export const startGetDepartments=()=>{
    return(dispatch)=>{
        axios.get('/departments',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            const departments=response.data
            dispatch(setDepartments(departments))
        })
    }
}
export const removeDepartment=(id)=>{
    return {
        type:'REMOVE_DEPARTMENT',
        payload:id
    }
}
export const startRemoveDepartment=(id)=>{
    return(dispatch)=>{
        axios.delete(`/departments/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            Swal.fire(
                'Good job!',
                'You deleted the department you did not want',
                'success'
              )
            const departments=response.data
            dispatch(removeDepartment(departments._id))
        })
    }
}
export const addDepartment=(departments)=>{
    return {
        type:'ADD_DEPARTMENT',
        payload:departments
    }
}
export const startAddDepartment=(formData)=>{
    return(dispatch)=>{
        axios.post('/departments',formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            Swal.fire(
                'Good job!',
                'You added the department you wanted',
                'success'
              )
            const departments=response.data
            dispatch(addDepartment(departments))
        })
    }
}