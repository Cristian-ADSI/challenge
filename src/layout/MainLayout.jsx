import Navbar from 'components/navbar/Navbar';
import './MainLayout.scss'
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <main className="layout">
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
