import React, {Component, useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {Button} from './Button';
import Korisnik from '../Korisnik';
import Context from '../store/context';
function Navbar() {
    const [click, setClick] = useState(false);
    const [clickPolica, setPolica] = useState(true);
    const handleClick = () => setClick(!click);
    const handlePolica = () => setPolica(!clickPolica);
    const [button, setButton] = useState(true);
    const closeMobileMenu = () => setClick(false);
    
    const {state, actions} = useContext(Context);
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    }
    
    const logOut = () => {
        actions({type:'setState',payload: {...state,korisnik:{username: "guest", password: "guest", ime: "guest",prezime:"guest",admin: 0} }})
        
    }
    
    
    
    

    window.addEventListener('resize',showButton);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <pre>e-biblioteka </pre> <i class="fas fa-book"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links'>početna</Link>
                        </li>
                        <li className={state.korisnik.admin===0 ? 'penis' : 'nav-item'}>
                            <Link to='/dodavanjeknjige' className='nav-links'>dodaj knjigu</Link>
                        </li>
                        <li className={state.korisnik.username==='guest' ? 'penis' : 'nav-item'}>
                            <Link to='/shelf' className='nav-links'>moja polica</Link>
                        </li>
                        <li className={state.korisnik.username==='guest' ? 'penis' : 'nav-item'}>
                            <Link to='/pretraga' className='nav-links'>pretraga</Link>
                        </li>
                        <li className='nav-item'  >
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>kontakt</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/popular' className='nav-links' onClick={closeMobileMenu}>popularno</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>o nama </Link>
                        </li>
                    </ul>
                    {state.korisnik.username==='guest' ?  <Button  buttonStyle='btn--outline' to='/login' >prijavi se</Button> : <Button  buttonStyle='btn--outline' onClick={logOut} to='/'>odjavi se</Button>}
                    
                </div>
            </nav>

        </>
    )
}

export default Navbar 
