import React from 'react';
import img from '../../images/about.jpg'
import './Hero.scss'
import { Link } from 'react-router-dom';

 const Hero = (props) =>{
    return (
        <div className="container">
           <img src={img} alt="about-img"/>
            <div className="text-block">
                <h1 className="title">{props.name}</h1>
                <h4 className="title-p">{props.text}</h4>
                <Link to="/destination"><button className="home-btn">{props.btn}</button></Link>
            </div>

        </div>

    )
}
export default Hero;