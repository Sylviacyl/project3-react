import React from 'react'
import { Button } from 'react-bootstrap';

var job1 = {
    "_id": "586c6bcbb962d738067e6d01",
    "active": true,
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

var jobdata = [ job1 , job2 ]




const JobSummary = React.createClass({
  render: function() {
    return (

      <div>

        <h1>title is:{this.props.title}</h1>
        <h3>headline is : {this.props.headline}</h3>
        <p>description is:{this.props.description}</p>
        <span>
          <p>
            <Button bsStyle="primary">Apply</Button>
            <Button bsStyle="primary">Learn more</Button>
          </p>
        </span>
      </div>

    )
  }
});




const JobList = React.createClass ({
  render: function () {
    const jobs = jobdata.map((job) => {
      return (
       <JobSummary
         title={job.title}
         headline={job.headline}
         decription={job.description}
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
