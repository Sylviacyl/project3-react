import React from 'react'
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';




    function HomeJumbo () {

    return(
      <Jumbotron>
      <h1>Eleete Consulting</h1>
      <p>a leading provider of specialist recruitment, talent management, people development, and recruitment process outsourcing (RPO) services worldwide.</p>

      <LinkContainer to={{ pathname: '/about' }}>



        <Button bsStyle="primary" >Learn more</Button>

    </LinkContainer>


      </Jumbotron>
      );
    }

  //  ReactDOM.render(jumbotronInstance, mountNode);

    export default HomeJumbo
