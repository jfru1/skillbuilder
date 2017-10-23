import React, { PropTypes } from 'react';
import LoginForm from '../components/Form/LoginForm.js';
import API from '../utils/API.js'

class LoginPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      errors: {},
      user: {
        email: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();
 //
 //    const email = encodeURIComponent(this.state.user.email);
 // const password = encodeURIComponent(this.state.user.password);
 // const formData = `email=${email}&password=${password}`;
 //
 // // create an AJAX request
 // const xhr = new XMLHttpRequest();
 // xhr.open('post', 'http://localhost:3001/auth/login');
 // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
 // xhr.responseType = 'json';
 // xhr.addEventListener('load', () => {
 //   if (xhr.status === 200) {
 //     // success
 //
 //     // change the component-container state
 //     this.setState({
 //       errors: {}
 //     });
 //
 //     console.log('The form is valid');
 //   } else {
 //     // failure
 //
 //     // change the component state
 //     const errors = xhr.response.errors ? xhr.response.errors : {};
 //     errors.summary = xhr.response.message;
 //
 //     this.setState({
 //       errors
 //     });
 //   }
 // });
 // xhr.send(formData);

var password = this.state.user.password;
API.checkClient(this.state.user)
.then(function(res){


  if(res.data.length > 0)
  {
    console.log("user Found")
    if(res.data[0].password === password)
    {
      console.log("password approved")
    }
    else {
      console.log("Wrong pass")
    }
  }
  else {
    console.log("user not found")
  }
})



    // console.log('email:', this.state.user.email);
    // console.log('password:', this.state.user.password);
  }


  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }



loadUser(){
return this.state.user;

}










  /**
   * Render the component.
   */
  render() {
    return (
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }

}

export default LoginPage;