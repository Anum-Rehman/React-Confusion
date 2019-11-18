import React, {Component} from 'react';
import { Navbar, Jumbotron, Nav } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            // Short form of React Fragment <></> to group togther a bunch of react component or we can use <React.Fragment> as most of the browser don't understand short form
            //Through this we can directly add our view into the react dom without a div
            <React.Fragment>
            <Navbar variant="dark" expand="md">
      <div className="container">
      <Navbar.Brand className="mr-auto" href="/">
            <img src="assets/images/logo.png" height="30" width="41" alt="Ristorante Con Fusion"/>
        </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav navbar>
            <Nav.Item>
                <Nav.Link className="nav-link" href="/home">
                    <span className="fa fa-home fa-lg"></span> Home
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="nav-link" href="/aboutus">
                    <span className="fa fa-info fa-lg"></span> About Us
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="nav-link" href="/menu">
                    <span className="fa fa-list fa-lg"></span> Menu
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="nav-link" href="/contactus">
                    <span className="fa fa-address-card fa-lg"></span> Contact Us
                </Nav.Link>
            </Nav.Item>
        </Nav>
        </Navbar.Collapse>
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