
import React from 'react'
import {  Button , Col, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';



const JobFilterForm = React.createClass({
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

        <FormGroup controlId="formControlsSelect">
              <ControlLabel>Location</ControlLabel>
              <FormControl
               name="city"
               componentClass="select"
               placeholder="select"
               value={this.state.city}
               onChange={this.handleChange}
               >
                <option value="Melbourne">Melbourne</option>
                <option value="Sydney">Sydney</option>
                <option value="Brisbane">Brisbane</option>
                <option value="Hobart">Hobart</option>
              </FormControl>
        </FormGroup>

        <FormGroup controlId="formControlsSelect">
              <ControlLabel>Job Sector</ControlLabel>
              <FormControl
               name="sector"
               componentClass="select"
               placeholder="select"
               value={this.state.sector}
               onChange={this.handleChange}
               >
                <option value="IT">IT</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Sales">Sales</option>

              </FormControl>


        </FormGroup>



          <p><Button id="btnsubmitJob" bsStyle="primary"  onClick={this.handleSubmit}>Search Jobs</Button></p>

   </form>
</Col>
    )
  }
});

export default JobFilterForm;
