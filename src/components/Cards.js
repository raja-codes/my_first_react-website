import React from 'react';
import CardItem from './CardItem';
import  './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/img-kailasgiri.jpg"
                        text="Kailasagiri is the place where peace and happiness
                        become life"
                        label="Kailasagiri"
                        path='/services'
                        />
                        <CardItem 
                        src="images/img-submarine.jpg"
                        text="INS Kursura Submarine Museum"
                        label="Submarine"
                        path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src="images/img-borracaves.jpg"
                        text="Breath-taking view of hilly terrain"
                        label="Borra Caves"
                        path='/services'
                        />
                        <CardItem 
                        src="images/img-yarada.jpg"
                        text="Experience the Coast of Bay of Bengal"
                        label="Yarada Beach"
                        path='/products'
                        />
                        <CardItem 
                        src="images/img-rushikonda.jpg"
                        text="'Jewel of East Coast' Rushikonda Beach"
                        label="Rushikonda"
                        path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;