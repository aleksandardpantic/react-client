import React, { Component, useContext, useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { Button } from '../Button'
import Korisnik from '../../Korisnik'
import Context from '../../store/context'


export class Login extends Component{
    static contextType = Context
    constructor(props){
        super(props);
        
        this.state={korisnikk: Korisnik,loggedIn: false};
        this.updatePassword=this.updatePassword.bind(this);
        this.updateUsername=this.updateUsername.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        const {state, actions} = this.context;
        fetch("https://localhost:44335/api/login",{
            method:'POST',
            headers:{
                
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                username: this.state.korisnikk.username,
                password: this.state.korisnikk.password
                
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            if (result==="invalid credentials") {
                alert("invalid credentials!");
            } else {
                
                this.setState({korisnikk: result[0],loggedIn: true});
                console.log("ovo je login state: ");
                console.log(this.state)
                console.log("ovo je login state username");
                console.log(this.state.korisnikk.username)
                actions({type:'setState',payload: {...state,korisnik:{username: this.state.korisnikk.username,password:this.state.korisnikk.password,ime: this.state.korisnikk.ime,prezime: this.state.korisnikk.prezime,admin: this.state.korisnikk.admin} }})
                console.log("ovo je global state: ")
                console.log(state.korisnik)
                
            }
        },
        (error)=>{
            alert('Failed'+error);
        })
    }
    updateUsername(event){
        this.setState({korisnikk: {username: event.target.value, password: this.state.korisnikk.password}})
        console.log(this.state)
    }
    updatePassword(event){
        this.setState({korisnikk: {password: event.target.value, username: this.state.korisnikk.username}})
        console.log(this.state)
    }
    
    render(){
        
    return (
        
        <div className='login-container'>
            {this.state.loggedIn===false ? <form className='form' autocomplete="off" > 
            <label for="username" >Username</label>
            <input type="text"  name="Username" required onChange={this.updateUsername} />
            <label for="password">Password</label>
            <input type="password" name="Password" required onChange={this.updatePassword}/>
            <div className='signup-sec'>
                <Link className='signup-link'to='/signup' ><p>učlani se</p></Link>
            </div>
            <div className='burr'>
                <Button onClick={this.handleSubmit} to='/'>
                    prijavi se
                </Button>
            </div>
            
            </form> : <div><h1>Dobro došli {this.state.korisnikk.ime+' '+this.state.korisnikk.prezime} </h1><Button  to='/'>početna</Button></div>}
        </div>
        
    )}
}




