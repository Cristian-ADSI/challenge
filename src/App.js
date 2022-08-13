import './sass/App.scss';

import { Home, Login } from 'pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from 'layout/MainLayout';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="app/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
