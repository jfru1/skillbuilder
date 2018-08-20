import React, { PropTypes } from 'react';
import {connect, Provider} from 'react-redux';
import {bindActionCreators} from 'redux';
import { updateUser } from '../actions/index';
import API from '../utils/API.js'
import Skillform from '../components/Form/skillForm.js'
import Navbar from '../components/Navbar/Navbar'
import Textbox from '../components/Textbox/Textbox'
import PracticeArc from '../components/Graphs/arcReference'

const momentTimeZone = require("moment-timezone")
const moment = require("moment")


class YourPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      post:"",
      date:"",
      email:"",
      completed:0,
      posted:true,
      timeSincePost:"",
      lastPost:""


    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
}



// componentWillRecieveProps(){
//
// console.log("recieved props")
//
//
//   this.setState({
//     email:this.props.email,
//     completed:this.props.completed
//   });
//
// }




componentWillMount(){
  this.setState({
    email:this.props.email,
    completed:this.props.completed
  });


var obj ={
email : this.props.email

}

API.checkPost(obj)

.then( function(res){
  console.log(res.data[0].Posts[(res.data[0].Posts.length-1)])
if (res.data[0].Posts.length > 0) {

  var timeNow = moment.tz(moment.tz.guess()).format()
  var timeNow1 = moment(timeNow)
  var timeStamp = moment(res.data[0].Posts[(res.data[0].Posts.length-1)].date);
  var hoursElapsed = timeNow1.diff(timeStamp, 'h');

  this.setState({
    timeSincePost:hoursElapsed,
    lastPost:res.data[0].Posts[(res.data[0].Posts.length-1)].post
  });



  //
  if(hoursElapsed > 24)
  {

    this.setState({
      posted:false
    });


  }

  console.log(timeNow)
  // console.log(timeStamp)
  console.log(hoursElapsed)
}

else{
  this.setState({
    posted:false
  });

}



}.bind(this))



}





  handleInputChange = event => {
      // Destructure the name and value properties off of event.target
      // Update the appropriate state

      console.log("typed a letter")
      const { name, value } = event.target;

      this.setState({
          [name]: value
      });
    };


    handleFormSubmit = event => {
      // When the form is submitted, prevent its default behavior, get recipes update the recipes state
      event.preventDefault();

      this.props.callApi(event, this.state)

      this
    };


render(){

  return (


    <div class="containers">

    <Navbar/>

      <div class="row">
        <div class="col-md-8">
         <div class="panel panel-default">
            <div class="panel-heading">
              <h1 class="panel-title"><strong>My Skill is...</strong></h1>
            </div>
            <div class="panel -body row">
              <div class="col-md-12">
                <div align ="center">
                <h1>{this.props.skill}!</h1>
                </div>
              </div>
              <div class="form-group">
                <div class="col-md-8">

                <div>

                  {

                    (this.state.posted === false) ?

                    <div>
                <label for="dailylearn"><h2>Today I learned...</h2></label>
                <textarea class="form-control" name = "post" onChange = {this.handleInputChange} value={this.state.post} row="2" placeholder="Sum up what you've learned in 140 characters or fewer!" maxlength="140"></textarea>
                <button type="submit" onClick = {this.handleFormSubmit} class="btn btn-success">Submit</button>
                  </div>
                  :
                  <div>
                  You have already posted for today!


                  Hours left till next post : {parseInt(24- this.state.timeSincePost)} hr(s)
                  <div>
                  Your Last Post:
                  <h3>{this.state.lastPost}</h3>

                  </div>

                  </div>
              }

                </div>


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


              <PracticeArc/>


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


// <Textbox>
// handleFormSubmit = {this.handleFormSubmit}
// handleInputChange = {this.handleInputChange}
// value = {this.state.post}
// name = "post"
// </Textbox>
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
completed:state.user.completed,

})



const mapDispatchToProps = (dispatch) => ({
  callApi: (value, state) => {


var obj = {
date:moment.tz(moment.tz.guess()).format(),
post:state.post,
email:state.email,
completed:(parseFloat(state.completed) + .75),
}

    API.addPost(obj)
    .then(function(res){
      dispatch(updateUser(res.data))
    })

    console.log(this.props)
  }

})
export default connect(mapStateToProps,mapDispatchToProps)(YourPage);
