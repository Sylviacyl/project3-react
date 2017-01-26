import React from 'react'
import { Button, Grid, Row, Col, Clearfix } from 'react-bootstrap';
import { Link } from 'react-router';


const style = {
  color: 'black',
  opacity: "0.7",
  backgroundColor: '#fff'
/*  backgroundImage: 'url(' + imgUrl + ')',  */
};

    function HomeRow () {

    return(
      <Grid style={style}>
        <Row className="show-grid">
          <Col sm={6} md={3}>
            <h3>Job Seekers</h3>
            <h4>START YOUR JOB SEARCH WITH GREAT CAREER ADVICE</h4>
            <p>
            Eleete Consulting offers great career advice for experienced candidates. </p>
            <p>
            We are committed to assisting candidates with each phase of their career, focusing on their career potential.
            Put your best foot forward with our career advice and make sure you showcase those skills that leading companies are looking for in a prospective employee.
            </p>
            <p>What’s holding you back from your maximum career potential?
            </p>
            <Link to='/jobseeker'>
              <Button bsStyle="primary" >Learn more</Button>
            </Link>

          </Col>

          <Col sm={6} md={3}>
            <h3>Career Services / Talent Management</h3>
            <p>
            Eleete can help you to develop a customised talent management strategy that’s right for your business.
            </p>
            <p>
            Provide help with assessment and selection, organisational design and management.
            </p>
            <p> Develop and enhance your people or support you with change and transition
            selecting the right people, developing their potential and fuelling their enthusiasm.
           </p>
            <p> Building staff commitment, and also supporting them through periods of change.
            </p>
            <Link to='/careerservices'>
              <Button bsStyle="primary" >Learn more</Button>
            </Link>
          </Col>
          <Clearfix visibleSmBlock></Clearfix>

          <Col sm={6} md={3}>
            <h3>Recruitment Services</h3>
            <h4>GLOBAL PRESENCE, SPECIALIST EXPERTISE</h4>
            <p>
            Eleete is a market leader in specialist recruitment.
            </p>
            <p>
            Highly connected, the best of both worlds - a global network with a local, personalised focus.
            </p>
            <p>
            Has the ability to build long-term partnerships - to nurture our talent pools and connect them with the right opportunities.
            </p>
            <p>
            Commitment to specialisation with industry experience, knowledge and qualifications.
            </p>
            <p>
            Deep market knowledge to provide insights in relevant market trends
            </p>
            <p>
            Effective sourcing methods and sourcing channels
            </p>


            <Link to='/recruitment'>
              <Button bsStyle="primary" >Learn more</Button>
            </Link>
            <h1></h1>
          </Col>

          <Col sm={6} md={3}>
            <h3>Search Jobs</h3>
            <p> view our current job listings</p>
            <p> search jobs by location, city, sector</p>
            <Link to='/jobsearch '>
              <Button bsStyle="primary" >Learn more</Button>
            </Link>
          </Col>
        </Row>
      </Grid>
      );
    }

  //  ReactDOM.render(jumbotronInstance, mountNode);

    export default HomeRow
