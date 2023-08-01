import './App.css';
import { Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="missions" element={<Missions />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </>
  );
}
export default App;
