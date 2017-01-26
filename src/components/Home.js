import React from 'react'
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import HomeJumbo from '../components/HomeJumbo'

import HomeRow from '../components/HomeRow'
import FooterInfo from '../components/FooterInfo'


import Background from '../assets/images/conf.jpg'

const homeStyle = {
  padding: "50px",

  backgroundImage: "url(" + Background + ")",
};


function Home() {

    return(
      <div style={homeStyle}>
        <HomeJumbo/>
        <HomeRow/>
        <FooterInfo/>
      </div>
      );
    }

  //  ReactDOM.render(jumbotronInstance, mountNode);

    export default Home
