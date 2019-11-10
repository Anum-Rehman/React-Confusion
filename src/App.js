import React from 'react';
import { Navbar } from 'react-bootstrap';
import './App.css';
import Menu from './components/MenuComponent'

function App() {
  return (
    <div>
    <Navbar bg="primary" variant="dark">
      <div className="container">
        <Navbar.Brand href="/">Ristorante Con Fusion</Navbar.Brand>
      </div>
    </Navbar>
    <Menu/>
  </div>
  );
}

export default App;
