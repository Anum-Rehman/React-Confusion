import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import './App.css';
import Menu from './components/MenuComponent'
import { DISHES } from './shared/dishes'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
    };
  }
render(){
  return (
    <div>
    <Navbar bg="primary" variant="dark">
      <div className="container">
        <Navbar.Brand href="/">Ristorante Con Fusion</Navbar.Brand>
      </div>
    </Navbar>
    <Menu dishes={this.state.dishes}/>
  </div>
  );
}
}
export default App;
