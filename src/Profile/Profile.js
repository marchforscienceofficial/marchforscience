import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Store from '../data/stores/User.js';
import './Profile.css';
import Login from '../shared/Login/Login.js';
import PhoneInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/libphonenumber.js';
import 'react-intl-tel-input/dist/main.css';


class Profile extends Component {

  constructor({ match }) {
    super();
    this.state = Store.getState();

    this.staging = {};

    this.handleChange = this.handleChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.save = this.save.bind(this);

    this.listener = Store.addListener(() => this.setState( Store.getState() ) );
  }

  storeChanged() {
    this.setState(Store.getState());
  }

  componentWillUnmount() {
    this.listener.remove();
  }

  save(event) {
    event.preventDefault();
    console.log(this.state);
    Store.save(this.state);
  }

  handleChange(event) {
    var el = event.target;

    this.setState({[el.name]: el.value});
  }

  handlePhoneChange(status, value, countryData, number, id) {
    this.setState({'phone': status ? number : ''});
  }

  render() {
      if (this.state.id) {
        return <mfs-profile>
          <h1>{this.state.firstName} {this.state.lastName}</h1>

          <form action={`/api/user/${this.state.id}`} method='PUT' onSubmit={this.save}>
            <input name='email' placeholder="Email" value={this.state.email} onChange={this.handleChange} type="text"/>
            <input name='username' placeholder="Username" value={this.state.username} onChange={this.handleChange} type="text"/>
            <input name='firstName' placeholder='First Name' value={this.state.firstName} onChange={this.handleChange} type="text"/>
            <input name='lastName' placeholder='Last Name' value={this.state.lastName} onChange={this.handleChange} type="text"/>
            <PhoneInput
              name='phone'
              placeholder='(123) 456-7890'
              defaultValue={this.state.phone}
              formatOnInit={true}
              format={true}
              onPhoneNumberBlur={this.handlePhoneChange}
              defaultCountry='us'/>

            <input type="submit"/>
          </form>

        </mfs-profile>
      }
      else {
        return <mfs-profile>
          <Login/>
        </mfs-profile>
      }
  }

}

export default Profile