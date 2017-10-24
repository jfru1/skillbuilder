import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
//Lets also grab our actions so we can bind them to the props of our Component
// import { incrementCount, decrementCount } from '../actions/countActions'
import LoginPage from './Login'
import SignUpPage from './SignUp'
//REDUX MAGIC! This puts both of our functions into the Component's props and links them to dispatch
function mapDispatchToProps(dispatch){
  return bindActionCreators({ incrementCount, decrementCount }, dispatch);
}
//MORE REDUX MAGIC! This function takes in all of our Application State and takes pieces of it and maps it
//to the Component's props.
function mapStateToProps(state) {
  return {
    count: state.counter.count,
    user: state.user.user
  };
}
//We export our Component using connect so that we can connect our React with our Redux for an awesome app!
export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
