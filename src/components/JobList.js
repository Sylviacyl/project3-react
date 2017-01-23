import React from 'react'
import { Button ,ButtonToolbar,ButtonGroup, Col} from 'react-bootstrap';

import JobFull from './JobFull'
import JobApplication from './JobApplication'
/* var job1 = {
    "_id": "586c6bcbb962d738067e6d01",
    "active": false,
    "salary": "50 - 80k",
    "jobtype": "Full Time",
    "sector": "IT",
    "city": "Melbourne",
    "keywords": "Javascript",
    "expiry": "1970-01-01T00:02:03.456Z",
    "description": "work for a growing startup in the Fintech sector.  We are looking for a Developer with  experience with Node JS and React.",
    "headline": "Great Fintech Company",
    "title": "Full Stack Junior Dev",
    "__v": 0,
    "created_at": "2017-01-04T03:28:11.697Z"
  };

var job2 = {
    "_id": "586c6bcbb962d738067e6d02",
    "active": true,
    "salary": "120 - 150k",
    "jobtype": "Full Time",
    "sector": "IT",
    "city": "Melbourne",
    "keywords": "Javascript",
    "expiry": "1970-01-01T00:02:03.456Z",
    "description": "work for a growing startup in the Fintech sector.  We are looking for a Developer with  experience with Node JS and React to lead a small team",
    "headline": "Great Fintech Company",
    "title": "Full Stack Lead Dev",
    "__v": 0,
    "created_at": "2017-01-04T03:28:11.697Z"
  }

var jobdata = [ job1 , job2 , job1 ]
*/


const JobSummaryActive = React.createClass({

  render: function() {

    return (

      <div>
        <Col md={4} >

           <h2>{this.props.title}</h2>
           <h3>{this.props.headline}</h3>
           <h5>{this.props.description}</h5>
{  /*         <p>_id: {this.props._id}</p>

           <p>active: {this.props.active ? 'active':'inactive'}</p>
           <p>salary: {this.props.salary}</p>
           <p>sector: {this.props.sector}</p>
           <p>city: {this.props.city}</p>
           <p>keywords: {this.props.keywords}</p>


           <p>__v: {this.props.__v}</p>
           <p>created_at: {this.props.created_at}</p>

        */ }
           <span>

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

               <JobFull
                 title={this.props.title}
                 headline={this.props.headline}
                 description={this.props.description}
                 _id={this.props._id}
                 salary={ this.props.salary}
                 sector={this.props.sector}
                 city={this.props.city}
                 keywords={this.props.keywords}
                />
            </ButtonToolbar>

         </Col>

     </div>
    )
  }
})

const JobSummaryInactive=React.createClass({
  render: function() {

    return (
      <div>not active job</div>
    )
  }
})


const JobSummary=React.createClass({
  render: function() {
    if (this.props.active) {
      return <JobSummaryActive { ...this.props } />
    }
    else {
       return <JobSummaryInactive { ...this.props } />
    }

/*    return (

       <div>

          <h1>title is: {this.props.title}</h1>
          <h3>headline is : {this.props.headline}</h3>
          <h3>description is : {this.props.description}</h3>
          <p>_id: {this.props._id}</p>
          <p>active: {this.props.active}</p>
          <p>salary: {this.props.salary}</p>
          <p>sector: {this.props.sector}</p>
          <p>city: {this.props.city}</p>
          <p>keywords: {this.props.keywords}</p>
          <p>description: {this.props.description}</p>
          <p>headline: {this.props.headline}</p>
          <p>title: {this.props.title}</p>
          <p>__v: {this.props.__v}</p>
          <p>created_at: {this.props.created_at}</p>
          <span>
            <p>
              <Button bsStyle="primary"  >Apply</Button>
              <Button bsStyle="success">Learn more</Button>
            </p>
          </span>

      </div>

    ) */
  }
});




const JobList=React.createClass ({
  render: function () {
    const jobs=this.props.jobs.map((job) => {
      return (
       <JobSummary key={ job._id }
         title={job.title}
         headline={job.headline}
         description={job.description}
         sector={job.sector}
         _id={job._id}
         created_at={ job.created_at}
         city={ job.city }
         keywords={ job.keywords }
         active={ job.active }
         salary={job.salary}
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

 export default JobList
