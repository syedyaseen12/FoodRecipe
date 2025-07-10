import './index.css';
import { Routes, Route } from 'react-router';
import 'leaflet/dist/leaflet.css';

import HomePage from "./Pages/HomePage"
import LandingPage from "./Pages/LandingPage"
import MapPage from "./Pages/MapPage"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/MapPage" element={<MapPage/>} />
      </Routes>
    </div>
  )
}

export default App
