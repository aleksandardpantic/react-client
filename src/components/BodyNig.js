import React from 'react'
import '../App.css'
import {Button} from './Button';
import './BodyNig.css';

function BodyNig() {
    return (
        <div className='nig-contaier' onLoad='window.scroll(0,0)'>
            <img className='image' src = '\pexels-pixabay-159711.jpg' alt='' />
            
            <q className='hnig'> Neka vise svi crni ljudi </q>
            <p className='ciite'>Seneka</p>
            <div className='nig-btns'> 
                <div className='nig'>
                    <Button className='btns'  buttonStyle='btn--outline' buttonSize='btn--large' rickroll={true} to='/'> drevni spisi</Button>
                </div>
                
            </div>
            
        </div>
    )
}

export default BodyNig

