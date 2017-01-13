import React, { Component } from 'react';
import 'whatwg-fetch'; // Polyfills window.fetch
import fetchAPI from './api/fetchAPI'
import { fetchCurrentUser } from './api/auth'
import replaceItemWithID from './utils/replaceItemWithID'
import Counter from './components/Counter'
import SignInForm from './components/Auth/SignInForm'
import Jumbo from './components/Jumbo'
import Recruitment from './components/Recruitment'
import JobForm from './components/JobForm'
import './App.css';


//
import { Router, Route, Link, hashHistory } from 'react-router';

const Home = () => <div><h1>Home</h1><Links /><Jumbo/><Recruitment/><JobForm/></div>;
const About = () => <div><h1>About</h1><Links /></div>;
const Contact = () => <div><h1>Contact</h1><Links /></div>;


const Links = () =>

<nav>
 < Link to ="/">Home </Link>
 < Link to ="/about">About </Link>
 < Link to ="/contact">Contact </Link>

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
    //  counters: []
    };

    this.onUserSignedIn = this.onUserSignedIn.bind(this);

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

    fetchAPI('/counters')
      .then(counters => {
        this.setState({ counters })
      })
      .catch(error => {
        console.error('Error loading counter api', error.message)
      })
  }

  onChangeCount(id, change) {
    fetchAPI(`/counters/${ id }`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        change: change
      })
    })
      .then(newCounter => {
        this.setState(({ counters }) => ({
          // Transform counters, replacing the changed counter,
          // which has an `_id` of the passed `id`.
          counters: replaceItemWithID(counters, id, newCounter)
        }))
      })
  }

  onAddCounter() {
    fetchAPI(`/counters`, {
      method: 'POST'
    })
      .then(newCounter => {
        this.setState(({ counters }) => ({
          // Transform counters, replacing the changed counter,
          // which has an `_id` of the passed `id`.
          counters: counters.concat(newCounter)
        }))
      })
  }

  onUserSignedIn(user) {
    this.setState({ currentUser: user })
  }

  render() {


    const { needsToCheckSignIn, currentUser} = this.state
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
    {/*}  // {
      //   counters.map((counter, index) => {
      //     return (
      //       <Counter key={ index }
      //         count={ counter.count }
      //         onIncrement={ this.onChangeCount.bind(this, counter._id, 1) }
      //         onDecrement={ this.onChangeCount.bind(this, counter._id, -1) }
      //       />
      //     )
      //   })
      // }
      //  <button onClick={ this.onAddCounter.bind(this) }>Add</button> */}

      <Button title="Search" />
                 <br /><br />
              <Button title="SAVE" />


              <Router history = { hashHistory }>
                <Route path ="/" component ={Home} ></Route>
                <Route path ="/about" component ={About} ></Route>
                <Route path ="/contact" component ={Contact} ></Route>
              </Router>

      </main>
    )
  }

}




export default App
