import React, { Component } from 'react';
import Home from './Home';
import Menu from './MenuComponent'
import DishDetail from './Dishdetail';
import { DISHES } from '../shared/dishes';
import {Switch,Route, Redirect} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }


render(){
    const HomePage = () =>{
        return(
            <Home/>
        )
    }
  return (
    <div>
        <Header/>
        <Switch>
            <Route path="/home" component={HomePage}/>
            {/* Use arrow function in component attribute of route to make use of props */}
            <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/>} />
            {/* To define default route we can use redirect */}
            <Redirect to="/home"/>
        </Switch>
    <Footer/>
  </div>
  );
}
}
export default Main;
