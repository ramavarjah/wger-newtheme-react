import React from 'react';
import Logowger from './logo-bg-white.png';

const Logo = (props) => {
  return <img style={{ height: 60 }} alt="Logo" src={Logowger} {...props} />;
};

export default Logo;
