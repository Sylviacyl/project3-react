import React from 'react'
import { Grid } from 'react-bootstrap';


const footerStyle = {
  padding: "1.5em",
  color: 'black',
  opacity: "0.8",
  backgroundColor: '#fff'

};


function FooterInfo() {

  return(
    <Grid style={footerStyle}>
      <p className='copyright'>Copyright Eleete Consulting 2017 &copy;</p>
    </Grid>

)
};

export default FooterInfo
