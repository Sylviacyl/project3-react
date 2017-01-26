import React from 'react'
import { Col, Jumbotron, Button } from 'react-bootstrap';


const footerStyle = {
  padding: "1.5em",
  

};


function FooterInfo() {

  return(
    <div style={footerStyle}>
      <p className='copyright'>Copyright Eleete Consulting 2017 &copy;</p>
    </div>

)
};

export default FooterInfo
