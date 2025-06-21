import './App.css'

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import MyNavbar from './components/Navbar'
import HomePage from './components/Home/HomePage';
import AboutPage from './components/About/AboutPage';
import HappyTails from './components/HappyTails/HappyTailsPage';
import HelpPage from './components/Help/HelpPage';

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
        <Route path="/help" element={<HelpPage/>} />
      </Routes>
    </Router>

  )
}

export default App
