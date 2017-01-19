import React, { Component } from 'react';
import 'whatwg-fetch'; // Polyfills window.fetch
import fetchAPI from './api/fetchAPI'
import { fetchCurrentUser } from './api/auth'
import replaceItemWithID from './utils/replaceItemWithID'
import Counter from './components/Counter'
import SignInForm from './components/Auth/SignInForm'
import HomeJumbo from './components/HomeJumbo'
import HomeRow from './components/HomeRow'
import JobForm from './components/JobForm'
import JobList from './components/JobList'
import JobDetail from './components/JobDetail'
import Jobdata from './components/Data'
import Example from './components/Modal'
import { searchJobs, createJob } from './api/jobs'
//import ProfileForm from './components/ProfileForm'

//import NavbarInstance from './components/NavBar'
import './App.css'


//
import { Router, Route, Link, hashHistory } from 'react-router'





const Home = ({ jobs=Jobdata }) =>
  <div>
    <h1>Home</h1>
    <Links />
    <HomeJumbo/>
    <HomeRow/>
    <JobForm/>
    <JobList jobs= { jobs }/>
  </div>;

const About = () =>
  <div>
    <h1>About</h1>
    <Links />
    <HomeJumbo/>
    <Example/>
  </div>;

const Contact = () =>
  <div>
    <h1>Contact</h1>
    <Links />
  </div>;

const Jobseeker = ({jobs=[Jobdata[0]]}) =>
  <div>
    <h1>Job Seekers</h1>
    <Links />
    <JobDetail jobs={jobs}/>
  </div>;

const Recruitmentservices = () =>
  <div>
    <h1>Recruitment Services</h1>
    <Links />
  </div>;

const Careerservices = () =>
  <div>
    <h1>Career Services</h1>
    <Links />
  </div>;

const Jobdetails = ({jobs}) =>
  <div>
    <h1>Job Details</h1>
    <Links />
  </div>;

const Links = () =>
<nav>
   < Link to="/"> Home </Link>
   < Link to="/about">About </Link>
   < Link to="/contact">Contact </Link>
   < Link to="/jobseeker">Job Seeker </Link>
   < Link to="/recruitment">Recruitment </Link>
   < Link to="/careerservices">Career Services </Link>
   < Link to="/jobdetails">Job Details </Link>

   <Button bsStyle='success' bsSize='small'>Get started today</Button>
</nav>





// Button from './components/Button'
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // We first check with the API if a user is signed in
      needsToCheckSignIn: true,
      currentUser: null,
      jobs: []
    //  counters: []
    };

    // Bind all handlers (callback functions)
    this.onUserSignedIn = this.onUserSignedIn.bind(this);
  //  this.onCreateJob = this.onCreateJob.bind(this);

    fetchCurrentUser()
      .then(user => {
        this.setState({
          needsToCheckSignIn: false,
          currentUser: user
        })
      })
      .catch(error => {
        this.setState({
          needsToCheckSignIn: false
        })
      })


    searchJobs()
    .then(jobs => {
      console.log('LOADED JoBS', jobs)
      this.setState({jobs})
    })
    .catch( error => {
      console.error('Error loading jobs api', error.message)
    })


    fetchAPI('/counters')
      .then(counters => {
        this.setState({ counters })
      })
      .catch(error => {
        console.error('Error loading counter api', error.message)
      })
  }

  onUserSignedIn(user) {
    this.setState({ currentUser: user })
  }



  render() {


    const { needsToCheckSignIn, currentUser, jobs } = this.state
    console.log('render jobs', jobs)
  //  const { needsToCheckSignIn, currentUser, counters } = this.state
    return (
      <main className="App">
      {
        needsToCheckSignIn ? (
          <p>Loading…</p>
        ) : currentUser ? (
          currentUser.email
        ) : (
          <SignInForm onUserSignedIn={ this.onUserSignedIn } />
        )
      }




              <Router history={ hashHistory }>

                <Route path="/" component={ Home }></Route>
                <Route path="/about" component={About} ></Route>
                <Route path="/contact" component={Contact} ></Route>
                <Route path="/jobseeker" component={Jobseeker} ></Route>
                <Route path="/recruitment" component={Recruitmentservices} ></Route>
                <Route path="/careerservices" component={Careerservices} ></Route>
                <Route path="/jobdetails" component={Jobdetails} ></Route>
              </Router>

      </main>
    )
  }

}




export default App
