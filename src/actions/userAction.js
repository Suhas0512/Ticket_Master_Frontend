import axios from '../config/axios'
import Swal from 'sweetalert2'

export const startRegister=(formData,redirect)=>{
    return()=>{
        axios.post('/users/register',formData)
        .then((response)=>{
            if(response.data.hasOwnProperty('errors')){
                const displayMessages=[]
                for (const key in response.data.errors){
                    displayMessages.push(response.data.errors[key].message)
                }
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${displayMessages.join(', ')}`,
                  })
            }else{
                redirect()
            }
        })
    }
}

export const setUser=(user)=>{
    return{type:'SET_USER',payload:user}
}
export const startSetUser=()=>{
    return (dispatch)=>{
        axios.get('/users/account',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            const user=response.data
            dispatch(setUser(user))
        })
    }
}

export const startLogin=(formData,redirect)=>{
    return(dispatch)=>{
        axios.post('/users/login',formData)
        .then(response=>{
            if(response.data.hasOwnProperty('error')){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                  })
            }else{
                localStorage.setItem('authToken',response.data.token)
                //redirect()
                axios.get('/users/account',{
                    headers:{
                        'x-auth':localStorage.getItem('authToken')
                    }
                })
                .then(response=>{
                    const user=response.data
                    dispatch(setUser(user))
                    Swal.fire(
                        'Good job!',
                        'You are logged in',
                        'success'
                      )
                    redirect()
                })
            }
        })
    }}
    export const startLogout = (redirect) => {
        return(dispatch)=>{
            axios.delete('/users/logout', {
                headers : {
                    'x-auth' : localStorage.getItem('authToken')
                }
            })
            .then((response)=>{
                localStorage.removeItem('authToken')
                window.location.href="/"
            })
        }
    }