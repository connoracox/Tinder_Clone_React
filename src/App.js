import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import { BrowserRouter, 
  Routes, 
  Route, 
  Link 
} from 'react-router-dom'
import Home from './views/Home'
import Matches from './views/Matches';
import Account from './views/Account';


function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/matches">Matches</Link>
          </li>
          <li>
            <Link to="/account">Account</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
