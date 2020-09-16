import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/js/all.js';

import Login from './components/login'
import Dashboard from './components/dashboard'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: null
    }

    this.liftingEmail = this.liftingEmail.bind(this)
  }

  liftingEmail(email) {
    this.setState({email: email})
    console.log(this.state.email)
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact><Login liftingEmail={this.liftingEmail} /></Route>
          <Route path='/dashboard'><Dashboard email={this.state.email} /></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
