
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './screens/HomeScreen.tsx'
import Profile from './screens/ProfileScreen.tsx'
import './styles/styles.css'
import { useState } from 'react';

function App() {
  const [paginaActual, setPaginaActual] = useState(window.location.pathname.split('/').pop())
  const reloadWindow = () => {
    setPaginaActual(window.location.pathname.split('/').pop())
  }

  return (
    <Router>
      <div className='containerApp'>
        <div className='navbar'>
          <button onClick={reloadWindow}><Link to="/"><h5 className={paginaActual === "" ?'textBotonOpcion2':"textBotonOpcion1"}>Home</h5></Link></button>
          <button onClick={reloadWindow}><Link to="/Profile"><h5 className={paginaActual === "Profile" ?'textBotonOpcion2':"textBotonOpcion1"}>Profile</h5></Link></button>
          {/* <button onClick={reloadWindow}><h5 className={paginaActual === "login" ?'textBotonOpcion2':"textBotonOpcion1"}>Profile</h5></button> */}
        </div>
        <div className='appContainerMainScreen'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
