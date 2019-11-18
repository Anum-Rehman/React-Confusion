import React, {Component} from 'react';
import { Navbar, Jumbotron } from 'react-bootstrap';

class Header extends Component{
    render(){
        return(
            // Short form of React Fragment <></> to group togther a bunch of react component or we can use <React.Fragment> as most of the browser don't understand short form
            //Through this we can directly add our view into the react dom without a div
            <React.Fragment>
            <Navbar variant="dark">
      <div className="container">
        <Navbar.Brand href="/">Ristorante Con Fusion</Navbar.Brand>
      </div>
    </Navbar>
    <Jumbotron>
        <div className="container">
            <div className="row row-header">
                <div className="col-12 col-sm-6">
                    <h1>Ristorante Con Fusion</h1>
                    <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipmacking creations will tickle your culinary sense!</p>
                </div>
            </div>
        </div>
    </Jumbotron>
            </React.Fragment>
        )
    }
}

export default Header;