import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      MainLayout
      <div className="main">
        <div className="main__content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
