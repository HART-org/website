//import { useState } from 'react'
import { Link } from 'react-router-dom'

import logoimg from '/src/assets/logo.png'
import home_img from '/src/assets/home.jpg'

const HomePage = () => {

    return (
        <div style={{ marginTop:"100px" }}>
          <img style={{ marginBottom:"20px" }} src={logoimg} alt="Logo" className="logo" id='main-logo' />
          <div className='home-about-div'>
            <img src={home_img} alt="Home" className='home-img' />
            <p className='content-text home-about-text '>
              Homeless Angels Rescue Team (HART) is a nonprofit organization in Texas rescuing homeless small dogs and helping them find forever homes in New England. <Link to="/about">Learn more</Link> about us and how to adopt, or <Link to='/help'>help us</Link> today in our mission to save as many homeless angels as possible by fostering in Texas or Rhode Island or donating critical funds.
            </p>
          </div>
          
        </div>
    );
};

export default HomePage;