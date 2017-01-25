import React from 'react'
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router';

const jumboStyle = {
  color: 'black',
  backgroundColor: '#37BC9B',
/*  backgroundImage: 'url(' + imgUrl + ')',  */
};



    function HomeJumbo () {

    return(
      <Jumbotron style={jumboStyle}>
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
