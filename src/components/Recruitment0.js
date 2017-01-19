import React from 'react'
import { Navbar, Jumbotron, Button, Grid, Row, Col, Clearfix } from 'react-bootstrap';





    function Recruitment () {

    return(
      <Grid>
        <Row className="show-grid">
          <Col sm={6} md={3}>
            <h3>Job Seekers</h3>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
            <p><Button bsStyle="primary">Learn more</Button></p>
          </Col>

          <Col sm={6} md={3}>
            <h3>Career Services</h3>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
            <p><Button bsStyle="primary">Learn more</Button></p>
          </Col>
          
          <Clearfix visibleSmBlock></Clearfix>

          <Col sm={6} md={3}>
            <h3>Recruitment Services</h3>
            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <p><Button bsStyle="primary">Learn more</Button></p>
          </Col>

          <Col sm={6} md={3}>
            <h3>Search Jobs</h3>
            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <p><Button bsStyle="primary">Learn more</Button></p>
          </Col>
        </Row>
      </Grid>
      );
    }

  //  ReactDOM.render(jumbotronInstance, mountNode);

    export default Recruitment
