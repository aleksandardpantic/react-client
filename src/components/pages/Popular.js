import React, { Component } from 'react'
import './Popular.css'
import { Button } from '../Button'


export class Popular extends Component {

    constructor(props) {
        super(props);
        this.state={knjige:[]}
    }
    refreshList(){
        fetch(process.env.REACT_APP_API+'/popular').then(response=>response.json()).then(data=>{this.setState({knjige:data})});
    }
    componentDidMount(){
        this.refreshList();
    }
    componentDidUpdate(){
        this.refreshList();
    }
    render(){
        const {knjige} = this.state;
    return (
        <div className='pop-container'>
            <h1>Popularno</h1>
            <div className='knjige'>
            
        {knjige.map(knjiga=>
            <div className='knjiga'>
                
            <div className='title'>
            {knjiga.naslov}
            </div>
            <div className='ocena'>
                {knjiga.ocena}/5
            </div>
            <div className='autor'>
            {knjiga.ime + " "+ knjiga.prezime}
            </div>
            <div className='dugme'>
                <Button>Rezerviši</Button>
            </div>
            
        </div>
            )}
               
            </div>
        </div>
    )
    }
}


