import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from '../Button'
import './Signup.css'

function Signup() {
    
    return (
        <div className='signup-container'>
            <form className='form' autocomplete="off"> 
            <label for="ime" >ime</label>
            <input type="text"  name="ime"/>
            <label for="prezime">prezime</label>
            <input type="text" name="prezime"/>
            <label for="username" >korisničko ime</label>
            <input type="text"  name="username"/>
            <label for="password">lozinka</label>
            <input type="password" name="password"/>
            <label for="password">ponovi lozinku</label>
            <input type="password" name="password"/>
            
            <div className='burr'>
                <Button to='/'>
                    učlani se ODMAH
                </Button>
            </div>
            
            </form>
        </div>
    )
}

export default Signup
