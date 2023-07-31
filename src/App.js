import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import Layout from './pages/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Rockets />} />
          <Route path="profile" element={<Profile />} />
          <Route path="missions" element={<Missions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
