import React from 'react'
import {  Button , Popover, Tooltip, Modal, OverlayTrigger} from 'react-bootstrap';


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
    const popover= (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip= (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );

    return (
      <div>

        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
        >
        Learn More
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          <h1>title is: {this.props.title}</h1>
          <h3>headline is : {this.props.headline}</h3>
          <h3>description is : {this.props.description}</h3>
          <p>_id: {this.props._id}</p>
          <p>active: {this.props.active ? 'active':'inactive'}</p>
          <p>salary: {this.props.salary}</p>
          <p>sector: {this.props.sector}</p>
          <p>city: {this.props.city}</p>
          <p>keywords: {this.props.keywords}</p>
            <h4>Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

            <h4>Popover in a modal</h4>
            <p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p>

            <h4>Tooltips in a modal</h4>
            <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>

            <hr />

          </Modal.Body>
          <Modal.Footer>

            <Button bsStyle="primary"  onClick ={this.close} >Apply</Button>

            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});


export default JobFull
