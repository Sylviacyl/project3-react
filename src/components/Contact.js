import React from 'react'
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import ProfileForm from '../components/ProfileForm'

import ContactInfo from '../components/ContactInfo'
import ContactForm from '../components/ContactForm'
import Background from '../assets/images/bench-accounting.jpg'

const contactStyle = {
  padding: "50px",

  backgroundImage: "url(" + Background + ")",
};


function Contact() {

    return(
      <div style={contactStyle}>
        <ProfileForm/>
        <ContactInfo/>
        <ContactForm/>
      </div>
      );
    }

  //  ReactDOM.render(jumbotronInstance, mountNode);

    export default Contact
