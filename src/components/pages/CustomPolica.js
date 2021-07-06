import React, { Component } from 'react'
import Context from '../../store/context'
import './Popular.css'
import { Button } from '../Button'

export class CustomPolica extends Component {
    static contextType = Context
    constructor(props) {
        super(props);
        this.vracanjeKnjige=this.vracanjeKnjige.bind(this);
        this.oceni=this.oceni.bind(this);
        this.update=this.update.bind(this);
        this.setClicks=this.setClicks.bind(this);
        this.state={stavke:[], knjiga: {
            idknjiga: 0, username: ''
        },nova_ocena: 0,prOcena: 0,ocenaclick: false,status: 0}
    }
    vracanjeKnjige(event){
        event.preventDefault();
        
        const {state, actions} = this.context;
        console.log(event.target.value,state.korisnik.username)
        
        
        
        
        
            
        
        fetch("https://localhost:44335/api/shelf",{
            method:'POST',
            headers:{
                
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                idknjiga: event.target.value,
                username: state.korisnik.username

                
            })
        }).then(res=>res.json()).then((result)=>{
            alert(result)
        },
        (error)=>{
            alert('Failed'+error);
        })
        this.refreshList();
    
    }
    componentDidUpdate(){
        this.refreshList();
    }
    oceni(event){
        if (this.state.nova_ocena>5 || this.state.nova_ocena<1) {
            alert("ocena mora biti između 1 i 5")
        } else {
        event.preventDefault();
        this.refreshList();
        this.state.stavke.forEach(element => {
            console.log(element.moja_ocena==0)
            if (event.target.value==element.idknjiga) {
                if (element.moja_ocena!=0) {
                    alert("knjiga je vec ocenjena")
                } else {
                    const {state, actions} = this.context;
        
                    fetch("https://localhost:44335/api/stavka?ocena="+this.state.nova_ocena+"&idknjiga="+event.target.value+"&username="+state.korisnik.username,{
                    method:'POST',
                    headers:{
                        
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify({
                        
                        
                        })
                    }).then(res=>res.json()).then((result)=>
                    {
                    alert(result)
                    },
                    (error)=>{
                    alert('Failed'+error);
                    })
            
               
                }
                
            } 
            });
        
        }
    }
    
    refreshList(){
        const {state, actions} = this.context;
        fetch(process.env.REACT_APP_API+'/shelf/'+state.korisnik.username).then(response=>response.json()).then(data=>{this.setState({stavke:data})});
    }
    componentDidMount(){
        this.refreshList();
    }
    update(event){
        event.preventDefault();
        this.setState({nova_ocena: event.target.value})
        
        
    }
    setClicks(event){
        
        event.preventDefault();
        console.log(this.state.stavke);
        this.setState({ocenaclick: true})
        this.state.stavke.forEach(element => {
            if (element.idknjiga===event.target.value) {
                console.log(element);
                this.setState({prOcena: element.moja_ocena})
            }
        });
       
            
            
    }

    render(){
        const {stavke} = this.state;
        const {state, actions} = this.context;
    return (
        <div className='pop-container'>
            <h1>Moja polica</h1>
            <div className='knjige'>
            
        {stavke.map(stavka=>
            <div className='knjiga'>
                
            <div className='title'>
            {stavka.naslov}
            </div>
            <div className={stavka.ocena>2 ? 'ocena' : 'ocena-bad'}>
                {stavka.ocena}/5
            </div>
            <div className={stavka.moja_ocena===0 ? 'hide-ocena' : 'rrr'} >
            <div className={stavka.moja_ocena>2 ? 'ocena' : 'ocena-bad'}>
                {stavka.moja_ocena}/5
                
            </div>
            <p className='moja-ocena'>moja ocena</p>
            </div>
            <div className='autor'>
            {stavka.ime + " "+ stavka.prezime}
            </div>
            <div className='dugme'>
                <Button onClick={this.vracanjeKnjige} value= {stavka.idknjiga}>Vrati</Button>
            </div>
            
            <div className='dugme2'>
                <div className="duug">
                    <input className={stavka.moja_ocena==0 ?"imput" : "hide-ocena"} type="text" onInput={this.update}/>
                    <Button onClick={this.oceni} value= {stavka.idknjiga}>Oceni</Button>
                </div> 
                
            </div>
            
            
        </div>
            )}
               
            </div>
        </div>
    )
}
}

export default CustomPolica
