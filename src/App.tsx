import './App.css'

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import MyNavbar from './components/Navbar'
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import HappyTails from './components/HappyTailsPage';
import HelpPage from './components/HelpPage';
import AdoptableDogsPage from './components/AdoptableDogsPage';

function App() {
  
  return (
    <Router>
      <div className='App'>
        <MyNavbar />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/happytails" element={<HappyTails />} />
        <Route path="/adoptabledogs" element={<AdoptableDogsPage />} />
        <Route path="/help" element={<HelpPage />} />
      </Routes>
    </Router>

  )
}

export default App
