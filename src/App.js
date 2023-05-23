import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import Header from './components/Header'
import TinderCards from './components/TinderCards';
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
    <div className='app'>
      <Header />
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/matches">Matches</Link>
            </li>
            <li>
              <Link to="/account">Account</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/matches" element={<Matches />} />
          <Route path="/account" element={<Account />} />
          <Route path="/" element={<TinderCards />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
