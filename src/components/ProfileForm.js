
import React, { PropTypes } from 'react';
import {  Button ,FormGroup, ControlLabel, FormControl, HelpBlock, Form , Col, Checkbox} from 'react-bootstrap';
import { createProfile } from '../api/profiles';





const ProfileForm = React.createClass({
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
    const firstName = this.state.firstName
    const lastName = this.state.lastName
    const address = this.state.address
    const city = this.state.city

    const sector = this.state.sector
    const jobtype = this.state.jobtype
    const salary = this.state.salary
    const jobAlert = this.state.jobAlert



    const profileinfo = { user, firstName , lastName, address, city, sector, jobtype, salary, jobAlert}

    createProfile(profileinfo)
    alert("profile created " + firstName + ": " + lastName + ": " + address + ": " + city + ": " + sector +
    ": " + jobtype + ": " + salary+ ": "+jobAlert)
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
      <h3> Create a new Profile</h3>
      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Enter First Name</ControlLabel>
          <FormControl
            name="firstName"
            type="text"
            value={this.state.firstName}
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>


          <ControlLabel>Enter Last Name</ControlLabel>
          <FormControl
            name="lastName"
            type="text"
            value={this.state.lastName}
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>

          <ControlLabel>Enter your Telephone number</ControlLabel>
          <FormControl
            name="phone"
            type="text"
            value={this.state.phone}
            placeholder="Telephone Number"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>

        </FormGroup>

        <FormGroup controlId="formControlsTextarea">


          <ControlLabel>Enter Address</ControlLabel>
          <FormControl
          componentClass="textarea"
            name="address"
            type="text"
            value={this.state.address}
            placeholder="Street Address"
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


              <ControlLabel>Prefered Job Type</ControlLabel>
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
               name = "jobAlert"
               value={this.state.active}
               onChange={this.handleChange}
               >
                   Would you like to receive Job Alerts ?
              </Checkbox>

        </FormGroup>



          <p><Button id="btnsubmitProfile" bsStyle="primary"  onClick={this.handleSubmit}>Submit </Button></p>


      </form>
      </Col>
    );
  }
});

export default ProfileForm;
