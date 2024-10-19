import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CarForm from './components/CarForm';
import BrandForm from './components/BrandForm';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car" element={<CarForm />} />
          <Route path="/brand" element={<BrandForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
