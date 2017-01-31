
import React from 'react'
import {  Button , Col, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';



const JobFilterForm = React.createClass({
  getInitialState() {
    return {
      value: '0'
    };
  },



  handleSubmit(e) {
    const user = this.user


    const keywords = this.state.keywords
    const sector = this.state.sector


    const city = this.state.city


    const searchinfo = { user,  keywords, sector, city}

    alert('Search :' + " keywords:"+ keywords + " sector:" + sector + " city:" + city)
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
        >
        <ControlLabel>Job search</ControlLabel>
        <FormControl
          name="keywords"
          type="text"
          value={this.state.keywords}
          placeholder="Enter Keywords"
          onChange={this.handleChange}
        />


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
               <option value="0">Choose your option</option>
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
                <option value="0">Choose your option</option>
                <option value="IT">IT</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Sales">Sales</option>

              </FormControl>


        </FormGroup>



          <p><Button id="btnsubmitJob" bsStyle="primary"  onClick={this.handleSubmit}>Search Jobs</Button></p>

   </form>
</Col>
</div>
    )
  }
});

export default JobFilterForm;
