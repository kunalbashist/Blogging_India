import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';


function Login() {
    return (
      <div className='at'>
      <div className='aw'>
        <h1><center>LOGIN</center></h1>
        <form >
          <div className='em'>
            <label htmlFor="em">Email</label>
            <input type='email' name='email' id ='email'  />
          </div>
          <div className='fnn'>
            <label htmlFor="fnn">Password</label>
            <input type='text' name='institute' id='password'  />
          </div>
        </form>
        <div className='gya'>
          <Link to='/blog'> <button className='but' >Login</button></Link>
          </div>
          
          <div className='jan'>
            <small>Don't have an account, Click on Register Button</small>
          </div>
          <div className='gya'>
          <Link to='/register'><button className='but' >Register</button></Link>
          </div>
      </div>
    </div>
        
    );
}
export default Login
