import React from 'react';
import Hero from '../Hero/Hero';
import './Home.scss'

const Home = () => {
    return (
        <React.Fragment>
            <Hero name = "Welcome to Ultimate Tours" 
            text="Visit your favourite destinations with us !!"
            btn="Select your places"
        />
        </React.Fragment>
    )
}

export default Home;