import { Navbar } from 'components';
import { userAuth } from 'helppers/UserAuth';
import { selectUser } from 'helppers/UserSLice';
import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import './MainLayout.scss';

const MainLayout = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    userAuth(dispatch);
  }, []);

  return (
    <main className="layout">
      {user === null && <Navigate to={'/'} replace />}
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
