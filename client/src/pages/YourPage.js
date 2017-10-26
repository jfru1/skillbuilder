import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { updateUser } from '../actions/index';
import API from '../utils/API.js'
import Skillform from '../components/Form/skillForm.js'
import Navbar from '../components/Navbar/Navbar'
const moment = require('moment')

class YourPage extends React.Component {
  constructor(props) {
    super(props);

}



checkTime(a){ //a is just the object in question, the post that was made.
    var timeNow = moment();
    var timeStamp = moment(a.created); //a.created is the stamp and can be changed to whatever it actually resolves to
    var hoursElapsed = timeNow.diff(timeStamp, 'h');
    if (hoursElapsed > 24){
        // [Load up the components for entering in the new entry]
    } else {
        // [Load up the box, greyed out]
    }
}




render(){

  return (


    <div class="container">

    <Navbar/>

      <div class="row">
        <div class="col-md-8">
         <div class="panel panel-default">
            <div class="panel-heading">
              <h1 class="panel-title"><strong>My Skill is...</strong></h1>
            </div>
            <div class="panel-body row">
              <div class="col-md-12">
                <div align ="center">
                <h1>{this.props.skill}!</h1>
                </div>
              </div>
              <div class="form-group">
                <div class="col-md-8">
                  <label for="dailylearn"><h2>Today I learned...</h2></label>
                  <textarea class="form-control" row="2" placeholder="Sum up what you've learned in 140 characters or fewer!" maxlength="140"></textarea>
                </div>
              </div>
            </div>
         </div>
        </div>
        <div class="sidebar col-md-4">
          <div class="panel panel-default">
            <div align="center" class="panel-heading">
              <h3 class="panel-title"><strong>Your Progress So Far</strong></h3>
            </div>
            <div class="panel-body">
                <div class="thumbnail">
                  <img src="assets/images/usercurve.png" class="img-responsive" alt=""/>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div class="col-md-8">
      </div>
      <div class="sidebar col-md-4">
        <div class="panel panel-default">
          <div align="center" class="panel-heading">
            <h3 class="panel-title"><strong>Step by Step:</strong></h3>
          </div>
          <div class="panel-body">
            <ol>
              <h3>
              <li>{this.props.step1}</li>
              <li>{this.props.step2}</li>
              <li>{this.props.step3}</li>
              <li>{this.props.step4}</li>
              <li>{this.props.step5}</li>
              </h3>
            </ol>
          </div>
        </div>
    </div>
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
step1:state.user.step1,
step2:state.user.step2,
step3:state.user.step3,
step4:state.user.step4,
step5:state.user.step5,
createdAt:state.user.createdAt

})



export default connect(mapStateToProps)(YourPage);
