import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Button} from '../Button'
import './Signup.css'
import Context from '../../store/context'
import Korisnik from '../../Korisnik'

export class Signup extends Component{
    static contextType = Context
    constructor(props){
        super(props);
        
        this.state={korisnikk: Korisnik, ponovi: '',val:true};
        this.updatePassword=this.updatePassword.bind(this);
        this.updateUsername=this.updateUsername.bind(this);
        this.updateIme=this.updateIme.bind(this);
        this.updatePrezime=this.updatePrezime.bind(this);
        this.updatePonovi=this.updatePonovi.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        const {state, actions} = this.context;
        if (this.state.val===false) {
            
        } else {
            
        
        fetch("https://localhost:44335/api/signup",{
            method:'POST',
            headers:{
                
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                username: this.state.korisnikk.username,
                password: this.state.korisnikk.password,
                ime: this.state.korisnikk.ime,
                prezime: this.state.korisnikk.prezime,
                admin: 0

                
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            if (result==="username taken!") {
                alert(result);
            } else {
                
                
                
                actions({type:'setState',payload: {...state,korisnik:{username: this.state.korisnikk.username,password:this.state.korisnikk.password,ime: this.state.korisnikk.ime,prezime: this.state.korisnikk.prezime,admin: this.state.korisnikk.admin} }})
                fetch("https://localhost:44335/api/shelf/"+this.state.korisnikk.username,{
            method:'PUT',
            headers:{
                
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                
                
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            
        },
        (error)=>{
            alert('Failed'+error);
        })
                
            }
        },
        (error)=>{
            alert('Failed'+error);
        })
        
    }}
    updateUsername(event){
        this.setState({korisnikk: {username: event.target.value, password: this.state.korisnikk.password, ime: this.state.korisnikk.ime, prezime: this.state.korisnikk.prezime, admin: 0}})
        
    }
    updatePassword(event){
        this.setState({korisnikk: {username: this.state.korisnikk.username, password: event.target.value, ime: this.state.korisnikk.ime, prezime: this.state.korisnikk.prezime, admin: 0}})
        
    }
    updateIme(event){
        this.setState({korisnikk: {username: this.state.korisnikk.username, password: this.state.korisnikk.password, ime: event.target.value, prezime: this.state.korisnikk.prezime, admin: 0}})
        
    }
    updatePrezime(event){
        this.setState({korisnikk: {username: this.state.korisnikk.username, password: this.state.korisnikk.password, ime: this.state.korisnikk.ime, prezime: event.target.value, admin: 0}})
        
    }
    updatePonovi(event){
        
        this.setState({ponovi: event.target.value});
        
        var pwd = this.state.korisnikk.password.slice(0,this.state.korisnikk.password.length-1);
        console.log(pwd);
        if (pwd===this.state.ponovi) {
            
            this.setState({val:true})
        } else {
            this.setState({val:false}) 
        }
        
    }
    render() {
        const {state, actions} = this.context;
    return (
        <div className='signup-container'>
            {state.korisnik.username==='guest' ? 
            <form className='form' autocomplete="off"> 
            <label for="ime" >ime</label>
            <input type="text"  name="ime" required onChange={this.updateIme}/>
            <label for="prezime">prezime</label>
            <input type="text" name="prezime" required onChange={this.updatePrezime}/>
            <label for="username" >korisničko ime</label>
            <input type="text"  name="username" required  onChange={this.updateUsername}/>
            <label for="password">lozinka</label>
            <input type="password" name="password" required  onChange={this.updatePassword}/>
            <label for="password">ponovi lozinku</label>
            <input type="password" name="password" required onChange={this.updatePonovi} className={this.state.val ? '' : 'val'}/>
            
            <div className='burr'>
                <Button to='/' onClick={this.handleSubmit} >
                    učlani se ODMAH
                </Button>
            </div>
            
            </form> : <div><h1>Dobro došli {this.state.korisnikk.ime+' '+this.state.korisnikk.prezime} </h1><Button  to='/'>početna</Button></div>}
        </div>
    )}
}

