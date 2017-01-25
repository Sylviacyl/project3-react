import React from 'react'
import { Col, Grid,Image, Row ,Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import mage from '../assets/images/typing1.jpg'
import mage2 from '../assets/images/typing-laptop.jpg'
function CareerInfo() {

  return(
    <Grid >
      <Row className="show-grid">

      <Col xs={6} md={3}>
          <Image src={mage} thumbnail />
        </Col>



        <Col sm={6} md={6}>
          <h3>Talent management</h3>
          <h4>TRANSITION</h4>
          <p>
          Organisational change must be handled in a professional and supportive way to ensure productivity remains as high as possible for those remaining in the organisation and those transitioning employees feel supported and able to deal with new changes.  We offer a persona Talent Management
          </p>
        </Col>
   <Col sm={6} md={6}>
      <h4>WHAT IS TALENT MANAGEMENT?</h4>
      <p>At Eleete Consulting, we believe that talent management means selecting the right people, developing their potential and fuelling their enthusiasm, building their commitment, and also supporting them through periods of change.
      Understanding and evaluating people is at the heart of our business, creating a solid foundation for our products and services and enabling our clients to make fact-based decisions and smarter investments in people.
      Every year we invest in research and development, creating powerful solutions and tools to help you get the most from your talent. With experience in all corners of the globe, we complete more than 10,000 face-to-face assessments and 20,000 psychometric tests each year.
      </p>
      <p>Our clients look to us for support when they need to:</p>
      <ul>
        <li>improve the accuracy and efficiency of hiring and promotion processes</li>
        <li>clearly understand employees’ strengths and development needs</li>
        <li>improve management and leadership capability</li>
        <li>identify and/or validate high potentials or successors for key positions</li>
        <li>Cardevelop structured career and development opportunities for employees</li>
        <li>support managers and affected employees with smooth transition processes.</li>
      </ul>
      <p>
      Eleete can help you to develop a customised talent management strategy that’s right for your business so, whether you need help with assessment and selection, organisational design and management, developing and enhancing your people or support with change and transition we can help.
      </p>
      </Col>

<Col sm={6} md={6}>
      <h4>ASSESS AND SELECT</h4>
      <p>
      The greatest asset any organisation has is its people. As such, the task of finding, selecting, and retaining the best people is paramount in both an organisation’s day-to-day performance as well as the achievement of broader strategic objectives. We help you to improve your selection processes to deliver better quality talent, faster more positive candidate experiences, fully informed hiring and promotion decisions and identification and selection of future leaders.
      </p>
      </Col>
      <Col sm={6} md={6}>
      <h4>ORGANISATIONAL DESIGN AND MANAGEMENT</h4>
      <p>
      Organisation strategy is communicated top down by leadership but delivered bottom up by your people.
      </p>
      <p>
      ELEETE’s approach aligns your people with your organisational strategy, skills your leaders to effectively engage and inspire their people, enhances internal mobility, minimises turnover.
      </p>
      <br/>
</Col>


<Col xs={6} md={3}>
    <Image src={mage2} thumbnail />
  </Col>

<Col sm={6} md={6} >
      <h4>DEVELOP AND ENHANCE</h4>
      <p>
      Identifying key talent at various levels of your organisation and implementing talent development programs is critical to unleashing the potential of your workforce and building your organisation’s bench strength. ELEETE will partner with you to identify and develop high potentials at all levels for succession, focus and individualise development programs for high potentials, emerging and critical leaders and to help build your organisation-wide leadership capability.
      </p>
      <p>
      CHANGE AND lised and flexible approach to career transition and outplacement, using established programs and developing close working relationships with employers to ensure a smooth process.
      </p>
      <p>
      Eleete is an established recruitment firm providing services across Recruitment, Recruitment Process Outsourcing and Talent Management to top-tier organisations looking for mid to senior level professionals.
      </p>
      <p>
      With our global reach and world-class assessment tools, we have access to an extensive network of specialist professionals both locally and globally. Our accredited psychometric tests allow us to match candidates who have not only the right skills, but also those who have the right motivational and career fit to align with your company, culture and goals.
      </p>
      <p>
      As a talent solutions company, we pride ourselves on connecting clients with the best talent in a diverse range of industries. As specialists in recruitment, we know how to find the best people for hard-to-fill roles, and we do it quickly.
      </p>
<span>
      <Link to='/contact'>
       <Button bsStyle="primary">Contact Us </Button>
      </Link>

      . today and find more about how we can meet your organisations talent needs or enhance your own career.

      </span>
  </Col>
  </Row>
    </Grid>

)};

export default CareerInfo
