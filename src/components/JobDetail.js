import React from 'react'
import { Button , Col, Grid, Row} from 'react-bootstrap';


const JobDetailview = React.createClass({
  render: function() {

    return (

       <div>

       <Grid>
         <Row className="show-grid">
           <Col >

          <h1>{this.props.title}</h1>
          <h2>{this.props.headline}</h2>
          <h3>{this.props.description}</h3>


          <p>salary: {this.props.salary}</p>
          <p>sector: {this.props.sector}</p>
          <p>city: {this.props.city}</p>
          <p>keywords: {this.props.keywords}</p>




          <p>created_at: {this.props.created_at}</p>
          <span>
            <p>
              <Button bsStyle="primary"  >Apply</Button>
            </p>
          </span>

          </Col>
         </Row>
       </Grid>
      </div>

    )
  }
});



const JobDetail = React.createClass ({
  render: function () {
    const jobs = this.props.jobs.map((job) => {
      return (
       <JobDetailview
         title={job.title}
         headline={job.headline}
         description={job.description}
         sector = {job.sector}
         _id = {job._id}
         created_at = { job.created_at}
         city = { job.city }
         keywords = { job.keywords }
         active = { job.active }
         salary = {job.salary}
       />
     );
   });
   return (
     <div>
      {jobs}
     </div>
   );
 },
 });



 export default JobDetail
