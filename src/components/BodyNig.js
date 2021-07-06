import React from 'react'
import '../App.css'
import {Button} from './Button';
import './BodyNig.css';

function BodyNig() {
    function rickroll() {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ","_blank"); 
        
    }
    return (
        <div className='nig-contaier' onLoad='window.scroll(0,0)'>
            <img className='image' src = '\pexels-pixabay-159711.jpg' alt='' />
            
            <q className='hnig'> All this things make me act unwise </q>
            <p className='ciite'>Seneka</p>
            <div className='nig-btns'> 
                <div className='nig'>
                    <Button className='btns'  buttonStyle='btn--outline' buttonSize='btn--large' onClick= {rickroll}> drevni spisi</Button>
                </div>
                
            </div>
            
        </div>
    )
}

export default BodyNig

