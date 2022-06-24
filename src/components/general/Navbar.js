import React from 'react';
import Link from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar bg-main'>
      <h1>
        <Link to=''>
          <i className='fas fa-store'>e-Shop</i>
        </Link>
      </h1>
      <ul>
        <li>
          <Link to=''>Merchants</Link>
        </li>
        <li>
          <Link to=''>Register</Link>
        </li>
        <li>
          <Link to=''>Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
