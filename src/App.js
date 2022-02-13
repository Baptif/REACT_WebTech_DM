import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import Accueil from './components/Accueil';
import HotelsVue from './components/HotelsVue';
import ChambresVue from './components/ChambresVue';
import ClientsVue from './components/ClientsVue';
import ReservationsVue from './components/ReservationsVue';
import HotelAdd from './components/HotelAdd';
import HotelUpdate from './components/HotelUpdate';
import ChambreAdd from './components/ChambreAdd';
import ChambreUpdate from './components/ChambreUpdate';
import ClientAdd from './components/ClientAdd';
import ClientUpdate from './components/ClientUpdate';
import ReservationAdd from './components/ReservationAdd';
import ReservationUpdate from './components/ReservationUpdate';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <NavLink activeclassname="active" className='menu' to="/" >Accueil</NavLink >
            </li>
            <li>
              <NavLink activeclassname="active" className='menu' to="/hotels" >Hôtels</NavLink >
            </li>
            <li>
              <NavLink activeclassname="active" className='menu' to="/chambres" >Chambres</NavLink >
            </li>
            <li>
              <NavLink activeclassname="active" className='menu' to="/clients" >Clients</NavLink >
            </li>
            <li>
              <NavLink activeclassname="active" className='menu' to="/reservations" >Réservations</NavLink >
            </li>
            <div className='menuTitre'>
              Gestion Hôtelière
            </div>
          </ul>

          <Routes>
            <Route path="/hotels" element={<HotelsVue/>} />

            <Route path="/ajouterHotel" element={<HotelAdd />} />

            <Route path="/modifierHotel/:id" element={<HotelUpdate/>} />

            <Route path="/chambres" element={<ChambresVue />} />

            <Route path="/ajouterChambre" element={<ChambreAdd />} />

            <Route path="/modifierChambre/:id" element={<ChambreUpdate/>} />

            <Route path="/clients" element={<ClientsVue />} />

            <Route path="/ajouterClient" element={<ClientAdd />} />

            <Route path="/modifierClient/:id" element={<ClientUpdate/>} />

            <Route path="/reservations" element={<ReservationsVue />} />

            <Route path="/ajouterReservation" element={<ReservationAdd />} />

            <Route path="/modifierReservation/:id" element={<ReservationUpdate />} />

            <Route path="/" element={<Accueil />} />

          </Routes>

        </div>
      </Router>
    </div>
  );
}

export default App;
