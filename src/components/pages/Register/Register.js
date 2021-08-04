import React, { Component } from 'react';
import "./Register.css"
import { Link } from 'react-router-dom';
import axios from 'axios';

class Register extends Component{
  constructor(){
    super()
    this.state ={
       username:'',
       email:'',
       password:''
    }
    this.changeUsername =this.changeUsername.bind(this)
    this.changeEmail =this.changeEmail.bind(this)
    this.changePassword =this.changePassword.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

changeUsername(event){
  this.setState({
    username:event.target.value
  })
}
changeEmail(event){
  this.setState({
    email:event.target.value
  })
}
changePassword(event){
  this.setState({
    password:event.target.value
  })
}


onSubmit(event){
  event.preventDefault()

  const user ={
    username: this.state.username,
    email: this.state.email,
    password: this.state.password
  }

  axios.post('http://localhost:4000/app/auth/register', user)
      .then(Response => console.log(user.data))

  window.location ='/creat'    
}

render() {
  return (
    <div className='at'>
    <div className='aw'>
      <h1><center>REGISTER</center></h1>
      <form onSubmit={this.onSubmit}>
        <div className='em'>
          <label htmlFor="em">UserName</label>
          <input type='text'  placeholder="Username" 
          onChange={this.changeUsername}
          value={this.state.username} />
        </div>
        <div className='fnn'>
          <label htmlFor="fnn">Email</label>
          <input type='Email'  placeholder="Email" 
           onChange={this.changeEmail}
           value={this.state.email} />
        </div>
        <div className='fnn'>
              <label htmlFor="fnn">Password</label>
              <input type='password' placeholder="Password"
               onChange={this.changePassword}
               value={this.state.password} >             
              </input>
        </div>
        <div className='gya'>
         <button className='but' >Register</button>
        </div>
      </form>
  
    </div>
  </div>
  );
}
}
export default Register

 
