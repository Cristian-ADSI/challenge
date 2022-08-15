import './sass/App.scss';

import { Home, Login, ContentCategory, ContentDetails } from 'pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from 'layout/MainLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="app/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="category" element={<ContentCategory />} />
          <Route path="lesson" element={<ContentDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
