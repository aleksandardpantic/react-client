import React, {Component, useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {Button} from './Button';
import jQuery from 'jquery';
function Navbar() {
    const [click, setClick] = useState(false);
    const [clickPolica, setPolica] = useState(true);
    const handleClick = () => setClick(!click);
    const handlePolica = () => setPolica(!clickPolica);
    const [button, setButton] = useState(true);
    const closeMobileMenu = () => setClick(false);
    

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    }
    
    
    
    
    
    
    

    window.addEventListener('resize',showButton);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={handlePolica}>
                        <pre>e-biblioteka </pre> <i class="fas fa-book"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links'>početna</Link>
                        </li>
                        <li className={clickPolica ? 'penis' : 'nav-item'}>
                            <Link to='/' className='nav-links'>moja polica</Link>
                        </li>
                        
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>kontakt</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/popular' className='nav-links' onClick={closeMobileMenu}>popularno</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>o nama </Link>
                        </li>
                    </ul>
                    <Button buttonStyle='btn--outline' to='/login' >Prijavi se</Button>
                </div>
            </nav>

        </>
    )
}

export default Navbar 
