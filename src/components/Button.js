import React from 'react'
import './Button.css';
import {Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium','btn--large'];

export const Button = ({children, type,rickroll, buttonStyle, buttonSize, to}) => {

    const checkButtonStyle  = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize :SIZES[0];
    const handleClick = () => {
        if (rickroll===true) {
            window.open("https://youtu.be/dQw4w9WgXcQ", '_blank');
        } else {
            
        }
    }
    
    return (
        <Link to={to} exact>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={handleClick} type={type}>
                {children}
            </button>
        </Link>
    )
};
