import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from './pages/HomePage';
import './index.css';
import ProductsList from './components/ProductsList';
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/Navbar';

function App() {
  const location = useLocation();

  return (
    <React.Fragment>
      {/* Conditionally render Navbar based on current location */}
      {location.pathname !== '/' && location.pathname !== '/home'&& <Navbar />}
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Register />} />
        <Route path="/home" element={<HomePage />} />

      </Routes>
    </React.Fragment>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
