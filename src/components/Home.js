import React from 'react'
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import HomeJumbo from '../components/HomeJumbo'

import HomeRow from '../components/HomeRow'
import FooterInfo from '../components/FooterInfo'

function Home() {

    return(
      <div>
        <HomeJumbo/>
        <HomeRow/>
        <FooterInfo/>
      </div>
      );
    }

  //  ReactDOM.render(jumbotronInstance, mountNode);

    export default Home
