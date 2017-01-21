import React from 'react'
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router';

    function HomeJumbo () {

    return(
      <Jumbotron>
      <h1>Eleete Consulting</h1>
      <p>a leading provider of specialist recruitment, talent management, people development, and recruitment process outsourcing (RPO) services worldwide.</p>

      <Link to='/about'>
        <Button bsStyle="primary" >Learn more</Button>
      </Link>


      </Jumbotron>
      );
    }

  //  ReactDOM.render(jumbotronInstance, mountNode);

    export default HomeJumbo
