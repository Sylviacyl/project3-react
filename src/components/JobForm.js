
import React from 'react'
import {  Button ,Col, Checkbox, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import { createJob } from '../api/jobs';
import DatePicker from 'react-datepicker';
import moment from 'moment';

require('react-datepicker/dist/react-datepicker.css');


const ExpiryDate = React.createClass({
  displayName: 'Example',

  getInitialState: function() {
    return {
      expiry: moment()
    };
  },

  render: function() {
    return (
    <div>
    <h4>Job Application Expiry Date </h4>
      <DatePicker
          name="expiry"
          dateFormat="DD/MM/YYYY"
          selected={this.state.expiry}
          onChange={this.props.onChange} />

    </div>
      )
  }
});


const JobForm = React.createClass({
  getInitialState() {
    return {
      value: '',
      active: true
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

    createJob(jobinfo)
    alert("new job created" + expiry)
  },


  handleChange(e) {
    const input = e.target;
    const key = input.name;
    const value = input.value;

    this.setState({
      [key]: value
    });
  },

  handleExpiryChange(expiry) {
    this.setState({ expiry })
  },

  render() {
    return (
      <Col xs={12} md={8} mdOffset={2}>
      <h3> Create a new Job</h3>
      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Job Title</ControlLabel>
          <FormControl
            name="title"
            type="text"
            value={this.state.title}
            placeholder="Enter Job Title"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>


          <ControlLabel>Job Headline</ControlLabel>
          <FormControl
            name="headline"
            type="text"
            value={this.state.headline}
            placeholder="Enter Job Headline"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>

        <FormGroup controlId="formControlsTextarea">


          <ControlLabel>Job Description</ControlLabel>
          <FormControl
          componentClass="textarea"
            name="description"
            type="text"
            value={this.state.description}
            placeholder="Enter Job Description"
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

              <ControlLabel>Job Sector</ControlLabel>
              <FormControl
               name="sector"
               componentClass="select"
               placeholder="select"
               value={this.state.sector}
               onChange={this.handleChange}
               >
                <option value="Information Technology">IT</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Sales">Sales</option>

              </FormControl>

              <ControlLabel>Salary Guide</ControlLabel>
              <FormControl
               name="salary"
               componentClass="select"
               placeholder="select"
               value={this.state.salary}
               onChange={this.handleChange}
               >
                <option value="40 - 60 k">40 - 60 k</option>
                <option value="50 - 70 k">50 - 70 k</option>
                <option value="60 - 80 k">60 - 80k</option>
                <option value="70 - 90 k">70 - 90k</option>
                <option value="100k + ">100k+</option>

              </FormControl>


              <ControlLabel>Job Type</ControlLabel>
              <FormControl
               name="jobtype"
               componentClass="select"
               placeholder="select"
               value={this.state.jobtype}
               onChange={this.handleChange}
               >
                <option value="casual">casual</option>
                <option value="contract">contract</option>
                <option value="full-time">full-time</option>
                <option value="part-time">part-time</option>

              </FormControl>
              <Checkbox
               name = "active"
               value={this.state.active}
               onChange={this.handleChange}
               >
                   Job Active
              </Checkbox>
              <div>
                <h4>Job Application Expiry Date </h4>
                <DatePicker
                  name="expiry"
                  dateFormat="DD/MM/YYYY"
                  selected={this.state.expiry}
                  onChange={this.handleExpiryChange}
                />
              </div>
        </FormGroup>



          <p><Button id="btnsubmitJob" bsStyle="primary"  onClick={this.handleSubmit}>Submit </Button></p>


      </form>
      </Col>
    );
  }
});

export default JobForm;
