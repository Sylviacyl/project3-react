import React from 'react'
import { Button ,ButtonToolbar,ButtonGroup, Col} from 'react-bootstrap';

import JobFull from './JobFull'
import JobApplication from './JobApplication'

const style = {
  color: 'black',
  opacity: "0.8",
  backgroundColor: '#fff',
  padding: "1em"
/*  backgroundImage: 'url(' + imgUrl + ')',  */
};

const JobSummaryActive = React.createClass({

  render: function() {

    return (

      <container >
        <Col md={4} style={style}>
           <h1></h1>
           <h4>{this.props.title}</h4>
           <h5>{this.props.headline.substring(0,33)+'..'}</h5>
           <h6>{this.props.description.substring(0,45)+'...'}</h6>
{  /*         <p>_id: {this.props._id}</p>

           <p>active: {this.props.active ? 'active':'inactive'}</p>
           <p>salary: {this.props.salary}</p>
           <p>sector: {this.props.sector}</p>
           <p>city: {this.props.city}</p>
           <p>keywords: {this.props.keywords}</p>


           <p>__v: {this.props.__v}</p>
           <p>created_at: {this.props.created_at}</p>

        */ }



  {/*             <JobApplication
                 title={this.props.title}
                 headline={this.props.headline}
                 description={this.props.description}
                 _id={this.props._id}
                 salary={ this.props.salary}
                 sector={this.props.sector}
                 city={this.props.city}
                 keywords={this.props.keywords}
                />
*/}
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



         </Col>

     </container>
    )
  }
})

const JobSummaryInactive=React.createClass({
  render: function() {

    return (
      <div> </div>
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
