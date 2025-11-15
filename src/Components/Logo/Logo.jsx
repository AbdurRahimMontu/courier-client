import React from 'react';
import logo from '../../assets/image/logo.png';
const Logo = () => {
    return (
        <div className='flex items-end'>
          <img src={logo} alt="" />
          <h3 className='-ms-4 text-3xl font-bold'>zapShift</h3>
        </div>
    );
};

export default Logo;