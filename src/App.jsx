
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react' 
import './App.css'
import Home from './components/home'
import Loki from './marvel/Loki'; 
import Dcpage1 from './DC/Dcpage1';
import Thor from './marvel/Thor';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Page1" element={<Loki />} />
      <Route path="Dcpage1" element={<Dcpage1/>} />
      <Route element={<Thor/>} />
     
       
    </Routes>
  </Router>
  )
}

export default App
