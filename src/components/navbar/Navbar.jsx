import React from 'react';
import { navLinks } from 'constants/links';
import { Link } from 'react-router-dom';
import { brand } from 'constants/images';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to={'/app'}>
        <img className="navbar__brand" src={brand} alt="brand" />
      </Link>
      <div className="navbar__content">
        <ul className="navbar__content-menu">
          {navLinks.map((item) => (
            <li key={item.id} className="item">
              <Link to={item.route}>{item.name}</Link>
            </li>
          ))}

          <li className="item">
            <button className="item__logout" href="/">
         
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
