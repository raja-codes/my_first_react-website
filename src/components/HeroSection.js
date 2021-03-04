import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

export default function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/Vizag.mp4" autoPlay loop muted />
            <h1>VISAKHAPATNAM</h1>
            <p>THE CITY OF DESTINY</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    TOURISM
                </Button>
                <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large'>
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}
