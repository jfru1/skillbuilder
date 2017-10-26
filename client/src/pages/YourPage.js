import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { updateUser } from '../actions/index';
import API from '../utils/API.js'
import Skillform from '../components/Form/skillForm.js'



class YourPage extends React.Component {
  constructor(props) {
    super(props);

}




render(){

  return (

    <div>
    <h3>Welcome : {this.props.name}</h3>
    </div>
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



export default connect(mapStateToProps)(YourPage);
