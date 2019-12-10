import React, { Component } from 'react';
import Home from './Home';
import Menu from './MenuComponent'
import DishDetail from './Dishdetail';
import About from './AboutComponent';
import {Switch,Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { addComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import { actions } from 'react-redux-form'

const mapStateToProps = state =>{
    return{
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
    }
}

const mapDispatchToProps = dispatch => ({
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => { dispatch(fetchDishes())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos())
});
class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }
render(){
    const HomePage = () =>{
        return(
          <Home 
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishErrMess={this.props.dishes.errMess}
          promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
          promoLoading={this.props.promotions.isLoading}
          promoErrMess={this.props.promotions.errMess}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
      />
        )
    }

    const DishWithId=({match})=>{
        return(
          <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
          commentsErrMess={this.props.comments.errMess}
          addComment={this.props.addComment}
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
            <Route exact path="/contactus" component= {()=> <Contact resetFeedbackForm={this.props.resetFeedbackForm}/>} />
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
