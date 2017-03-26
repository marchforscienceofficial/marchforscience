import React, { Component } from 'react';
import './Login.css';
import Store from '../../data/user/Store.js';

class Login extends Component {

  constructor({ match }) {
    super();
    this.state = {
      user: Store.getState(),
    };

    this.listener = Store.addListener(() => this.setState({ user: Store.getState() }) );
  }

  componentWillUnmount() {
    this.listener.remove();
  }

  inputChange(event){
    console.log(event.target.value);
    Store.update({firstName: event.target.value});
  }

  render() {
      return <mfs-login>
        <a href="/auth/facebook">Login with Facebook</a>
        <input type="text" onInput={this.inputChange}/>
        {this.state.user.firstName}
      </mfs-login>
  }

}

export default Login;
