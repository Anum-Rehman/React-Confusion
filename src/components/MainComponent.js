import React, { Component } from 'react';
import Home from './Home';
import Menu from './MenuComponent'
import DishDetail from './Dishdetail';
import About from './AboutComponent';
import {Switch,Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';

const mapStateToProps = state =>{
    return{
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
    }
}

class Main extends Component {
  constructor(props) {
    super(props);
  }

render(){
    const HomePage = () =>{
        return(
            <Home dish={this.props.dishes.filter((dish)=>dish.featured)[0]}
            promotion={this.props.promotions.filter((promo)=>promo.featured)[0]}
            leader={this.props.leaders.filter((leader)=>leader.featured)[0]}
            />
        )
    }

    const DishWithId=({match})=>{
        return(
            <DishDetail dish={this.props.dishes.filter((dish)=>dish.id === parseInt(match.params.dishId,10))[0]}
            comments={this.props.comments.filter((comment)=>comment.dishId === parseInt(match.params.dishId,10))}
            />
        )
    }
  return (
    <div>
        <Header/>
        <Switch>
            <Route path="/home" component={HomePage}/>
            {/* Use arrow function in component attribute of route to make use of props */}
            <Route exact path="/menu" component={()=><Menu dishes={this.props.dishes}/>} />
            <Route exact path="/menu/:dishId" component={DishWithId} />
            <Route exact path="/contactus" component={Contact} />
            <Route exact path="/aboutus" component={()=><About leaders={this.props.leaders}/>} />
            {/* To define default route we can use redirect */}
            <Redirect to="/home"/>
        </Switch>
    <Footer/>
  </div>
  );
}
}
//if we are working with reat-router we have to surround connect with withRouter
export default withRouter(connect(mapStateToProps)(Main));
