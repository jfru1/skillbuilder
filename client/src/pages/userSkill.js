import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { updateUser } from '../actions/index';
import API from '../utils/API.js'
import Skillform from '../components/Form/skillForm.js'


class skillPage extends React.Component {
  constructor(props) {
    super(props);

  this.state = {
    user:"",
    skill:"",
    goal:"",
    steps:[]

  };
}

  handleInputChange = event => {
      // Destructure the name and value properties off of event.target
      // Update the appropriate state
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
    handleFormSubmit = event => {
      // When the form is submitted, prevent its default behavior, get recipes update the recipes state
      event.preventDefault();


console.log(this.state.skill)
console.log(this.state.goal)

    };



render(){
{this.props.skill != undefined ?(

console.log(this.props.skill)

):(

console.log("no skill filled")

)}

console.log(this.props.name)
console.log(this.props.email)
console.log(this.props.password)
console.log(this.props.skill)


  return (

<Skillform/>

  );
}

};



const mapStateToProps = (state) =>({


name:state.user.name,
email:state.user.email,
password:state.user.password,
skill:state.user.skill,
goal:state.user.goal,
steps:state.user.skills



})



export default connect(mapStateToProps)(skillPage);
