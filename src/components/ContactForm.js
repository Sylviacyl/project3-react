
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
    const email = this.state.email
    const phone= this.state.phone
    const service = this.state.service
    const message = this.state.message
    const keywords = this.state.keywords



    const contactforminfo = { user, email, phone, service, message}
    alert('Message sent :' + ' '+email+ ' ' + phone +' ' +service + ' '+message)

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
      <h2>Send us a message</h2>
      <form>

        <ControlLabel>Your Email Address</ControlLabel>
        <FormControl
          name="email"
          type="email"
          value={this.state.email}
          placeholder="Email"
          onChange={this.handleChange}
        />

        <FormControl.Feedback />
        <ControlLabel>Your Telephone Number</ControlLabel>
        <FormControl
          name="phone"
          type="text"
          value={this.state.phone}
          placeholder="Telephone"
          onChange={this.handleChange}
        />
        <FormGroup controlId="formControlsSelect">
              <ControlLabel>What service is this regarding</ControlLabel>
              <FormControl
               name="service"
               componentClass="select"
               placeholder="select"
               value={this.state.service}
               onChange={this.handleChange}
               >
               <option value="Select">Select</option>
                <option value="Recruitment Services">Recruitment Services</option>
                <option value="Career Services">Career Services</option>
                <option value="Career Advice">Career Advise</option>
                <option value="Other">Other</option>
              </FormControl>
          </FormGroup>

       <FormGroup>
              <ControlLabel>Message</ControlLabel>
              <FormControl
              componentClass="textarea"
                name="message"
                type="text"
                value={this.state.message}
                placeholder="Enter your Message"
                onChange={this.handleChange}
              />
              <FormControl.Feedback />
        </FormGroup>



          <p><Button id="btnsubmitJob" bsStyle="primary"  onClick={this.handleSubmit}>Send Message</Button></p>

   </form>
</Col>
</div>
    )
  }
});

export default ContactForm;
