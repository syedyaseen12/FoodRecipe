import './index.css';
import { Routes, Route } from 'react-router';
import 'leaflet/dist/leaflet.css';

import Homepage from "./Pages/Homepage"
import Landingpage from "./Pages/Landingpage"
import Mappage from "./Pages/Mappage"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Landingpage" element={<Landingpage />} />
        <Route path="/Mappage" element={<Mappage/>} />
      </Routes>
    </div>
  )
}

export default App
