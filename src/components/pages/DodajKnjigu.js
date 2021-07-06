import React, { Component } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { Button } from '../Button'

export default class DodajKnjigu extends Component {
    constructor(props) {
        super(props);
        
        this.state={pisci:[],id: '', naslov: ''};
        this.updateNaslov=this.updateNaslov.bind(this);
        this.selectChange=this.selectChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    updateNaslov(event) {
        this.setState({naslov: event.target.value})
    }
    selectChange(event){
        
        this.setState({id: event.target.value})
        
        
    }
    
    handleSubmit(){
        
        fetch(process.env.REACT_APP_API+"/popular",{
            method:'POST',
            headers:{
                
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                idknjiga: 0,
                naslov: this.state.naslov,
                ocena: 0,
                brOcena: 0,
                pisac: {
                  idPisac: this.state.id,
                  ime: "",
                  prezime: ""
                }
              })
        }).then(res=>res.json())
        .then((result)=>{
           alert(result)
        },
        (error)=>{
            alert('Failed'+error);
        })
    }
    refreshList(){
        fetch(process.env.REACT_APP_API+'/pisac').then(response=>response.json()).then(data=>{this.setState({pisci:data})});
    }
    componentDidMount(){
        this.refreshList();
    }
    render() {
        const {pisci} = this.state;
        return (
            <div className="login-container">
                <h1>Dodaj Knjigu</h1>
                <form className='form' autocomplete="off" > 
                    <label for="naslov" >Naslov</label>
                    <input type="text"  name="naslov" required onChange={this.updateNaslov} />
                    <label>Pisac</label>
                    <select onChange={this.selectChange}>
                        {pisci.map(pisac =>
                            <option value={pisac.idpisac}>
                                {pisac.Ime + " " + pisac.Prezime}
                            </option>)}
                    </select>
                   
                    <div className='burr'>
                        <Button onClick={this.handleSubmit}>
                             dodaj knjigu
                        </Button>
                    </div>
            
                </form>
            </div>
        )
    }
}
