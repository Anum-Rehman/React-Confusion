import React from 'react';
import { Navbar, NavbarBrand } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
    <Navbar dark color="bg-primary">
      <div className="container">
        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
      </div>
    </Navbar>
  </div>
  );
}

export default App;
