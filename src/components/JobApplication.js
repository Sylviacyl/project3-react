import React from 'react'
import {  Button , ControlLabel, FormControl, HelpBlock,Popover, Tooltip, Modal, OverlayTrigger} from 'react-bootstrap';


const JobApplication=React.createClass({
  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render() {


    return (
      <div>
        <span>
        <Button
          bsStyle="success"
          onClick={this.open}
        >
        Apply
        </Button>
        </span>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Application for {this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          <ControlLabel>Your Email Address/ControlLabel>
          <FormControl
            name="email"
            type="email"
            value={this.state.email}
            placeholder="email"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>

          <h1>{this.props.title}</h1>
          <h3>{this.props.headline}</h3>
          <h5>{this.props.description}</h5>
          <p>_id: {this.props._id}</p>
          <p>active: {this.props.active ? 'active':'inactive'}</p>
          <p>salary: {this.props.salary}</p>
          <p>sector: {this.props.sector}</p>
          <p>location: {this.props.city}</p>
          <p>keywords: {this.props.keywords}</p>


            <hr />
</ControlLabel>
          </Modal.Body>
          <Modal.Footer>

            <Button bsStyle="primary"  onClick ={this.close} >Submit</Button>

            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});


export default JobApplication
