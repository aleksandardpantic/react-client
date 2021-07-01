import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { Button } from '../Button'


function Login() {
    
      
    return (
        
        <div className='login-container'>
            <form className='form' autocomplete="off"> 
            <label for="username" >Username</label>
            <input type="text"  name="username"/>
            <label for="password">Password</label>
            <input type="password" name="password"/>
            <div className='signup-sec'>
                <Link className='signup-link'to='/signup' ><p>učlani se</p></Link>
            </div>
            <div className='burr'>
                <Button to='/' onClick={function () {
                    global.mod='odjavi se';
                    window.location.reload();
                }}>
                    prijavi se
                </Button>
            </div>
            
            </form>
        </div>
        
    )
}

export default Login
