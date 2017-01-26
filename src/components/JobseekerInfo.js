import React from 'react'
import { Image, Col, Container, Jumbotron, Button , Row} from 'react-bootstrap';
import { Link } from 'react-router';

import mage from '../assets/images/laptop2.jpg'



function JobseekerInfo() {

  return(
    <container >
    <Row>
    <Col sm={6} md={3}>
      <Image src={mage} thumbnail />
    </Col>
    <Col sm={6} md={6} className="text-justify">

      <h3>JOB SEEKERS - LOOKING FOR A ROLE IN HONG KONG?</h3>
      <p>Our expert recruitment consultants specialise in matching quality candidates with great permanent and temporary opportunities in the Hong Kong market. </p>


      <p>
      Eleete is an established recruitment firm providing services across Recruitment, Recruitment Process Outsourcing and Talent Management to top-tier organisations looking for mid to senior level professionals.
      </p>
      <p>
      With our global reach and world-class assessment tools, we have access to an extensive network of specialist professionals both locally and globally. Our accredited psychometric tests allow us to match candidates who have not only the right skills, but also those who have the right motivational and career fit to align with your company, culture and goals.
      </p>
      <p>
      As a talent solutions company, we pride ourselves on connecting clients with the best talent in a diverse range of industries. As specialists in recruitment, we know how to find the best people for hard-to-fill roles, and we do it quickly.
      </p>
      <p>
      Contact us today and    more about how we can meet your organisations talent needs or enhance your own career.
      </p>
      <Link to='/contact'>
       <Button bsStyle="primary">TELL US YOUR NEEDS</Button>
      </Link>

      </Col>
      </Row>
    </container>

)
};

export default JobseekerInfo
