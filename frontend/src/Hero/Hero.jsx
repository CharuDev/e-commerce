import React from 'react';
import "./Hero.css";
import hand_icon from "../Assets/Assets/hand_icon.png";
import arrow_icons from "../Assets/Assets/arrow.png";
import hero_img from "../Assets/Assets/hero_image.png"
const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>New Arrivals Only</h2>
            <div>
                <div className='hand-hand-icons'>
                    <p>new</p>
                    <img src={hand_icon} alt=""/>
                </div>
                <p>Collections</p>
                <p>for everyone</p>
            </div>
            <div className='hero-latest-btn'>
                <div>Latest Collections</div>
                <img src={arrow_icons} alt=""/>
            </div>
        </div>
        <div className='hero-right'>
            <img src={hero_img} alt=""/>
        </div>
    </div>
  )
}

export default Hero