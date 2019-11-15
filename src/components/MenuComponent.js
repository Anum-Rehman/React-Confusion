import React, {Component} from 'react';
import {Card,} from 'react-bootstrap';
import DishDetail from './Dishdetail';

class Menu extends Component{
    //required whenever we create a component class
    constructor(props){
        super(props);
        this.state={
            selectedDish: null,
        }
    }

    onDishSelect(dish){
        this.setState({
            selectedDish:dish,
        })
    }

    render(){
        const menu = this.props.dishes.map((dish)=>{
        const comments = dish.comments;
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=>this.onDishSelect(dish)}>
    <Card.Img
      width="100%"
      src={dish.image}
      alt={dish.name}
    />
    <Card.ImgOverlay>
    <Card.Title>{dish.name}</Card.Title>
    </Card.ImgOverlay>
    
  </Card>
                </div>
            )
        });

        return(
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                    <DishDetail dish={this.state.selectedDish}/>
            </div>
        );
    }
}

export default Menu;