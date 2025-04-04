//import { useState } from 'react'

import logoimg from '/src/assets/logo.png'

const HomePage = () => {

    return (
        <div style={{ marginTop:"100px" }}>
          <img src={logoimg} alt="Logo" className="logo" id='main-logo' />
          <p className='content-text' style={{ marginTop:"20px" }}>
            I don't really know what to put here
          </p>
        </div>
    );
};

export default HomePage;