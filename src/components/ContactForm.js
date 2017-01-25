
import React from 'react'
import {  Button , Col, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';



const ContactForm = React.createClass({
  getInitialState() {
    return {
      value: ''
    };
  },

  getValidationState() {
    const length = this.state.value.length;
    if (length > 4) return 'success';
  //  else if (length > 5) return 'warning';
    else
//    if (length > 0)
     return 'error';
  },

  handleSubmit(e) {
    const user = this.user
    const title = this.state.title
    const headline = this.state.headline
    const description = this.state.description
    const expiry = this.state.expiry
    const keywords = this.state.keywords
    const sector = this.state.sector
    const jobtype = this.state.jobtype
    const salary = this.state.salary
    const active = this.state.active
    const city = this.state.city


    const jobinfo = { user, title , headline, description, expiry, keywords, sector, jobtype, salary, active, city}


  },



  handleChange(e) {
    const input = e.target;
    const key = input.name;
    const value = input.value;
    // const headline = input.headline;
    // const description = input.description



    this.setState({
      [key]: value
    });

  },

  render() {
    return (
      <div className="container-fluid">
      <Col xs={12} md={4} mdOffset={4}>
      <h2>Job Search Criteria</h2>
      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
        <ControlLabel>Job search</ControlLabel>
        <FormControl
          name="search"
          type="text"
          value={this.state.search}
          placeholder="Enter Keywords"
          onChange={this.handleChange}
        />
        <FormControl.Feedback />
        <HelpBlock>Validation is based on string length.</HelpBlock>

        </FormGroup>




       <FormGroup>
              <ControlLabel>Message</ControlLabel>
              <FormControl
              componentClass="textarea"
                name="description"
                type="text"
                value={this.state.message}
                placeholder="Enter your Message"
                onChange={this.handleChange}
              />
              <FormControl.Feedback />
        </FormGroup>



          <p><Button id="btnsubmitJob" bsStyle="primary"  onClick={this.handleSubmit}>Search Jobs</Button></p>

   </form>
</Col>
</div>
    )
  }
});

export default ContactForm;
