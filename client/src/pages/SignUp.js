import React, { PropTypes } from 'react';
import SignUpForm from '../components/Form/SignUpForm.js';
import API from '../utils/API.js'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { updateUser } from '../actions/index';
import {withRouter} from "react-router-dom";
import history from '../history.js'


class SignUpPage extends React.Component {

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
        name: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

const obj = {
name:this.state.user.name,
email:this.state.user.email,
password:this.state.user.password

}

this.props.callApi(event, this.state)
}

  /**
   * Render the component.
   */
  render() {
    return (
      <SignUpForm
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

    API.saveClient(state.user)
    .then(function(res){
  dispatch(createUser(res.data))
  history.push('/userSkill')

    })
  }
})
export default withRouter(connect(null, mapDispatchToProps)(SignUpPage));
