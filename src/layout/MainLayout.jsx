import { Navbar } from 'components';
import { userAuth } from 'helpers/authentication';
import { selectUser } from 'helpers/UserSLice';
import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import './MainLayout.scss';

const MainLayout = () => {
  const [logged, setLogged] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    userAuth(dispatch,setLogged);
  }, []);

  return (
    <main className="layout">
      { !logged && <Navigate to={'/'} replace />}
      <header>
        <Navbar />
      </header>
      <div className="main">
        <div className="main__content">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default MainLayout;
