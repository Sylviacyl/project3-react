
import React from 'react'
import {  Button ,FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import { createJob } from '../api/jobs'



const JobForm = React.createClass({
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
    const title = this.state.title
    const description = this.state.description

    const jobinfo = { title , description}

    createJob(jobinfo)
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



          <p><Button bsStyle="primary"  onClick={this.handleSubmit}>Submit </Button></p>


      </form>
    );
  }
});

export default JobForm;
