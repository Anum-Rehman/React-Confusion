import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import Menu from './MenuComponent'
import DishDetail from './Dishdetail';
import { DISHES } from '../shared/dishes'

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishId){
    this.setState({
        selectedDish:dishId,
    })
}

render(){
  return (
    <div>
    <Navbar bg="primary" variant="dark">
      <div className="container">
        <Navbar.Brand href="/">Ristorante Con Fusion</Navbar.Brand>
      </div>
    </Navbar>
    <Menu dishes={this.state.dishes} comments={this.state.comments}
    onClick={(dishId)=>this.onDishSelect(dishId)}/>
    {/* As filter return arrayof match item that's why 0 will select only 1st item */}
    <DishDetail dish={this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish)[0]}/>
  </div>
  );
}
}
export default Main;
