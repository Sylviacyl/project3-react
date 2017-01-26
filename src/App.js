import React, { Component } from 'react';
import 'whatwg-fetch'; // Polyfills window.fetch
//import fetchAPI from './api/fetchAPI'
import { fetchCurrentUser } from './api/auth'
import replaceItemWithID from './utils/replaceItemWithID'
//import Counter from './components/Counter'

import AboutInfo from './components/AboutInfo'
import CareerInfo from './components/CareerInfo'
import Contact from './components/Contact'
import ContactInfo from './components/ContactInfo'
import ContactForm from './components/ContactForm'
import SignInForm from './components/Auth/SignInForm'
import HomeJumbo from './components/HomeJumbo'
import Home from './components/Home'
import AboutJumbo from './components/AboutJumbo'
import HomeRow from './components/HomeRow'
import JobForm from './components/JobForm'
import JobFilterForm from './components/JobFilterForm'
import JobList from './components/JobList'
import JobDetail from './components/JobDetail'
import Jobdata from './components/Data'
import JobseekerInfo from './components/JobseekerInfo'
import ProfileForm from './components/ProfileForm'
import RecruitmentInfo from './components/RecruitmentInfo'

//import Example from './components/Modal'
import NavbarInstance from './components/Navigation'
import { searchJobs, createJob } from './api/jobs'
//import ProfileForm from './components/ProfileForm'

//import NavbarInstance from './components/NavBar'
import './App.css'
import { HashRouter, Match, Miss, Link } from 'react-router'



const About = () =>
  <div>

    <AboutJumbo/>
    <AboutInfo/>

  </div>;



const Jobseeker = () =>
  <div>
    <h1>Job Seekers</h1>


    <JobseekerInfo/>
  </div>;

  const Jobsearch = ({jobs=Jobdata}) =>
    <div>
      <h1>Job Search</h1>

      <JobFilterForm />
      <h3> Current Vacancies </h3>
      <div className="container">
        <JobList jobs= { jobs }/>
      </div>
    </div>;

const Recruitmentservices = () =>
  <div>
    <h1>Recruitment Services</h1>

    <RecruitmentInfo/>
  </div>;

const Careerservices = () =>
  <div>
    <h1>Career Services</h1>
    <CareerInfo/>

  </div>;

const Jobdetails = ({jobs}) =>
  <div>
    <h1>Job Details</h1>
    <Links />
  </div>;

const EleeOnly =() =>
  <div>
    <h2>Elee Staff</h2>
    <JobForm/>

  </div>

  const Profile =() =>
    <div>

      <ProfileForm/>
    </div>

  const NoMatch = ({ location }) => (
  <div>
    <h2>Whoops - Page not found</h2>
    <p>Sorry but  {location.pathname}  didn’t match any pages</p>
  </div>
)

const Links = () =>
<nav>
   <Link to="/"> Home </Link>
   <Link to="/about">About </Link>
   <Link to="/contact">Contact </Link>
   <Link to="/jobseeker">Job Seeker </Link>
   <Link to="/recruitment">Recruitment </Link>
   <Link to="/careerservices">Career Services </Link>
   <Link to="/jobdetails">Job Details </Link>
   <Link to="/elee">Elee Staff </Link>
</nav>






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


    // fetchAPI('/counters')
    //   .then(counters => {
    //     this.setState({ counters })
    //   })
    //   .catch(error => {
    //     console.error('Error loading counter api', error.message)
    //   })
  }

  onUserSignedIn(user) {
    this.setState({ currentUser: user })
  }



  render() {


    const { needsToCheckSignIn, currentUser, jobs } = this.state
    console.log('render jobs', jobs)

  //  const { needsToCheckSignIn, currentUser, counters } = this.state
    return (
      <HashRouter>
        <main className="App">
        <NavbarInstance onUserSignedIn={ this.onUserSignedIn }/>
        {
          needsToCheckSignIn ? (
            <p>Loading…</p>
          ) : currentUser ? (
            currentUser.email
          ) : (
            <SignInForm onUserSignedIn={ this.onUserSignedIn } />
          )
        }

          <Match pattern="/" exactly component={ Home } />
          <Match pattern="/about" component={About} ></Match>
          <Match pattern="/contact" component={Contact} ></Match>
          <Match pattern='/jobseeker' render={() => <Jobseeker jobs= { jobs }/>} />
          <Match pattern='/jobsearch' render={() => <Jobsearch jobs= { jobs }/>} />
          <Match pattern="/recruitment" component={Recruitmentservices} ></Match>
          <Match pattern="/careerservices" component={Careerservices} ></Match>
          <Match pattern="/jobdetails" component={Jobdetails} ></Match>
          <Match pattern="/elee" component={EleeOnly} ></Match>
          <Match pattern="/profile" component={Profile} ></Match>
          <Miss component={NoMatch}/>

        </main>
      </HashRouter>
    )
  }

}



export default App
