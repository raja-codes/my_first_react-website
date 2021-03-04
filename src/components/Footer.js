import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Have Fun Visiting Visakhapatnam
                </p>
                <p className="footer-subscription-text">
                    Keep It Clean
                </p>
                
            </section>
            
        </div>
    )
}

export default Footer;