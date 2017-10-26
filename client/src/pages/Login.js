import React, { PropTypes } from 'react';
import LoginForm from '../components/Form/LoginForm.js';
import API from '../utils/API.js'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { updateUser } from '../actions/index';
import {withRouter} from "react-router-dom";
import history from '../history.js'

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








  processForm(event) {


    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    this.props.callApi(event, this.state)
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



const mapDispatchToProps = (dispatch) => ({
  callApi: (value, state) => {


    var password = state.user.password;
    API.checkClient(state.user)
    .then(function(res){

console.log(res)
      if(res.data)
      {
        console.log("user Found")
        if(res.data.password === password)
        {
          console.log("password approved")
          dispatch(updateUser(res))
          history.push('/userSkill')

        }
        else {
          console.log("Wrong pass")

        }
      }
      else {
        console.log("user not found")
      }
    })
  }
})



export default withRouter(connect(null, mapDispatchToProps)(LoginPage));
