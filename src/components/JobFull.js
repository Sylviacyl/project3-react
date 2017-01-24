import React from 'react'
import {  Button, ButtonToolbar , Popover, Tooltip, Modal, OverlayTrigger} from 'react-bootstrap';
import JobApplication from './JobApplication'

const JobFull=React.createClass({
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

        <Button
          bsStyle="primary"
          onClick={this.open}
        >
          Learn More
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Job Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>

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

          </Modal.Body>
          <Modal.Footer>
<ButtonToolbar>
          <JobApplication
            title={this.props.title}
            headline={this.props.headline}
            description={this.props.description}
            _id={this.props._id}
            salary={ this.props.salary}
            sector={this.props.sector}
            city={this.props.city}
            keywords={this.props.keywords}
           />
            <Button onClick={this.close}>Close</Button>
</ButtonToolbar>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});


export default JobFull
