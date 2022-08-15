import React from 'react';
import { navLinks } from 'constants/links';
import { brand } from 'constants/images';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'helppers/UserSLice';
import { auth, signOut } from 'services/firebase';
import './Navbar.scss';
import { userLogOut } from 'helppers/UserAuth';

const Navbar = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  
  const logOut = () => {
    userLogOut(dispatch);
  };

  return (
    <nav className="navbar">
      <Link to={'/app'} className="navbar__brand">
        <img src={brand} alt="brand" />
        <h3>{user && user.name}</h3>
      </Link>
      <div className="navbar__content">
        <ul className="navbar__content-menu">
          {navLinks.map((item) => (
            <li key={item.index} className="item">
              <Link to={item.route}>{item.name}</Link>
            </li>
          ))}

          <li className="item">
            <button className="item__logout" href="/" onClick={() => logOut()}>
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
