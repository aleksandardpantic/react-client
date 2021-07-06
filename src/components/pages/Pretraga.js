import React, { Component } from 'react'
import './Popular.css'
import { Button } from '../Button'
import Context from '../../store/context'


export class Pretraga extends Component {
    static contextType = Context
    constructor(props) {
        super(props);
        this.checkbox=this.checkbox.bind(this);
        this.state={knjige:[],check: false}
        this.rezervisi=this.rezervisi.bind(this);
    }
    refreshList(){
        var uslov;
        if (this.state.check) {
            uslov=1;
        } else {
            uslov = 0;
        }
        fetch(process.env.REACT_APP_API+'/Pretraga/'+uslov).then(response=>response.json()).then(data=>{this.setState({knjige:data})});
    }
    componentDidMount(){
        this.refreshList();
    }
    
    checkbox(){
        this.setState({check: !this.state.check});
        this.refreshList();
        console.log(this.state.check)
    }
    rezervisi(event){
        const {state, actions} = this.context;
        event.preventDefault();
        fetch("https://localhost:44335/api/Pretraga",{
            method:'POST',
            headers:{
                
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                idknjiga: event.target.value,
                username: state.korisnik.username,

                
            })
        }).then(res=>res.json()).then((result)=>{
            alert(result)
        },
        (error)=>{
            alert('Failed'+error);
        })
        this.refreshList();
    }
    
    render(){
        const {knjige} = this.state;
    return (
        <div className='pop-container'>
            <h1>Popularno</h1>
            <label className='lablea'>Po oceni</label>
            <input type="checkbox" onChange={this.checkbox} />
            <div className='knjige'>
                
        {knjige.map(knjiga=>
            <div className='knjiga'>
                
            <div className='title'>
            {knjiga.naslov}
            </div>
            <div className={knjiga.ocena>2 ? 'ocena' : 'ocena-bad'}>
                {knjiga.ocena}/5
            </div>
            <div className='autor'>
            {knjiga.ime + " "+ knjiga.prezime}
            </div>
            <div className='dugme'>
                <Button value= {knjiga.idknjiga} onClick={this.rezervisi}>Rezerviši</Button>
            </div>
            
        </div>
            )}
               
            </div>
        </div>
    )
    }
}