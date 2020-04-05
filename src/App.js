import React from 'react';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Account from './components/auth/Account'
import CustomerList from './components/customers/List'
import CustomerShow from './components/customers/Show';
import CustomerNew from './components/customers/New';
import CustomerEdit from './components/customers/Edit';
import DepartmentList from './components/departments/List';
import EmployeesList from './components/employees/List';
import EmployeesNew from './components/employees/New';
import EmployeesShow from './components/employees/Show';
import EmployeesEdit from './components/employees/Edit';
import TicketsList from './components/tickets/List';
import TicketsNew from './components/tickets/New';
import TicketEdit from './components/tickets/Edit'
import Swal from 'sweetalert2';
import { startLogout } from './actions/userAction';
import Home from './components/Home';
import Home1 from './components/Home1';


function App(props) {
  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log out!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Logged Out',
          'success'
        )
        props.dispatch(startLogout())
      }
    })
  }
  return (
    <BrowserRouter>
    <div className="container">
      {
        Object.keys(props.user).length==0?(
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <a className="navbar-brand ">Ticket Master</a>
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item active">
            <Link className="nav-link" to="/users/login">Login</Link></li>
            <li className="nav-item active">
            <Link className="nav-link" to="/users/register">Register</Link></li>
            </ul>
            </div>
            </nav>
          </div>
        ):(
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <a className="navbar-brand">Ticket Master</a>
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
            <Link className="nav-link" to="">Home</Link></li>
            <li className="nav-item active">
            <Link className="nav-link" to="/customers">customers</Link></li>
            <li className="nav-item active">
            <Link className="nav-link" to="/departments">departments</Link></li>
            <li className="nav-item active">
            <Link className="nav-link" to="/employees">employees</Link></li>
            <li className="nav-item active">
            <Link className="nav-link" to="/tickets">tickets</Link></li>
            <li className="nav-item active">
            <Link className="nav-link" to="/users/account">account</Link></li>
            <li className="nav-item active">
            <Link className="nav-link" onClick={handleLogout}>logout</Link></li>
            </ul>
            </div>
            </nav>
          </div>
        )
      }
      
      <Switch>
      {Object.keys(props.user).length==0?<Route path="/" component={Home1} exact={true}/>:
      <Route path="/" component={Home} exact={true}/>}
      <Route path="/users/login" component={Login}></Route>
      <Route path="/users/register" component={Register}></Route>
      <Route path="/users/account" component={Account}></Route>

      <Route path="/customers" component={CustomerList} exact={true}></Route>
      <Route path="/customers/new" component={CustomerNew}></Route>
      <Route path="/customers/edit/:id" component={CustomerEdit}></Route>
      <Route path="/customers/:id" component={CustomerShow}></Route>

      <Route path="/departments" component={DepartmentList} exact={true}></Route>

      <Route path="/employees" component={EmployeesList} exact={true}></Route>
      <Route path="/employees/new" component={EmployeesNew}></Route>
      <Route path="/employees/edit/:id" component={EmployeesEdit}></Route>
      <Route path="/employees/:id" component={EmployeesShow}></Route>

      <Route path="/tickets" component={TicketsList} exact={true}></Route>
      <Route path="/tickets/new" component={TicketsNew}></Route>
      <Route path="/tickets/edit/:id" component={TicketEdit}></Route>
      </Switch>
      
    </div>
    </BrowserRouter>
  );
}
const mapStateToProps=(state,props)=>{
  return{
    user:state.user
  }
}
export default connect(mapStateToProps)(App);
