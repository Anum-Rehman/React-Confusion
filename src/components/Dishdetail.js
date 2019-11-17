import React from 'react';
import {Card,ListGroup} from 'react-bootstrap';


function RenderDish({dish}){
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

    function RenderComments({comments}){
        comments = comments.map((comment)=>{
            return(
                <ListGroup.Item key={comment.id}>
                    <div>{comment.comment}</div>
                    <div> -- {comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</div>
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

    const DishDetail=(props)=>{
        const dish = props.dish;
        if(dish){
        return(
            <div className="container">
            <div className="row">
                <div className="col-12 col-sm-5 m-1">
                <RenderDish dish={props.dish}/>
                </div>
                <div className="col-12 col-sm-5 m-1">
                        <RenderComments comments={props.dish.comments}/>
                </div>
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

export default DishDetail;