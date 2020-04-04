import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import { startSetUser } from './actions/userAction';
import {startSetCustomers} from './actions/customersAction'
import { startSetEmployees } from './actions/employeesAction';
import { startGetDepartments } from './actions/departmentsAction';
import { startSetTickets } from './actions/ticketsAction';
import 'bootstrap/dist/css/bootstrap.css'

const store=configureStore()
console.log(store.getState())

store.subscribe(()=>{
    console.log(store.getState())
})
if(localStorage.getItem('authToken')){
    store.dispatch(startSetUser())
    store.dispatch(startSetCustomers())
    store.dispatch(startGetDepartments())
    store.dispatch(startSetEmployees())
    store.dispatch(startSetTickets())
}
const jsx=(
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));


