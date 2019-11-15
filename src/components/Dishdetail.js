import React, {Component} from 'react';
import {Card,ListGroup} from 'react-bootstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);
    }

    renderDish(dish){
        return(
            <Card>
                            <Card.Img width="100%" src={dish.image} alt={dish.name} />
                            <Card.Body>
                                <Card.Title>{dish.name}</Card.Title>
                                <Card.Text>{dish.description}</Card.Text>
                            </Card.Body>
                        </Card>
        )
    }

    renderComments(comments){
        comments = comments.map((comment)=>{
            const date = new Date(comment.date);
            return(
                <ListGroup.Item key={comment.id}>
                    <div>{comment.comment}</div>
                    <div> -- {comment.author}, {date.toLocaleDateString("en-US")}</div>
                </ListGroup.Item>
            );
        });
        return (
            <ListGroup variant="flush">
              <h4>Comments</h4>
              <ul className="list-unstyled">
                { comments }
              </ul>
              </ListGroup>
          )
    }

    render(){
        const dish = this.props.dish;
        if(dish){
        return(
            <div className="row">
                <div className="col-12 col-sm-5 m-1">
                {this.renderDish(dish)}
                </div>
                <div className="col-12 col-sm-5 m-1">
                        {this.renderComments(dish.comments)}
                </div>
            </div>
        )
        }
        else{
            return(
                <div></div>
            )
        }
    }
}
export default DishDetail;