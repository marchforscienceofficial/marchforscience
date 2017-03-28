import React, { Component } from 'react';
import './Login.css';
import Store from '../../data/stores/User.js';

class Login extends Component {

  constructor({ match }) {
    super();
    this.state = {
      user: Store.getState(),
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
    this.listener = Store.addListener(() => this.setState({ user: Store.getState() }) );
  }

  componentWillUnmount() {
    this.listener.remove();
  }

  login(event) {
    event.preventDefault();
    Store.login(this.state.username, this.state.password);
  }

  handleChange(event) {
    var el = event.target;
    this.setState({ [el.name]: el.value });
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

        <form action="/login" method="POST" onSubmit={this.login}>
          <input name="username" placeholder="Username" onChange={this.handleChange}/>
          <input name="password" placeholder="Password" onChange={this.handleChange}/>
          <input type="submit"/>
        </form>

        <form action="http://localhost:4000/signup" method='POST'>
          <input name='email' placeholder="Email"/>
          <input name='username' placeholder="Username"/>
          <input name='password' placeholder='Password'/>
          <input name='firstName' placeholder='First Name'/>
          <input name='lastName' placeholder='Last Name'/>
          <input name='phone' placeholder='(123) 456-7890'/>

          <input type="submit"/>
        </form>

      </mfs-login>
  }

}

export default Login;
