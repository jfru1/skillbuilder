import React, { Component } from "react";
import LoginPage from "./Login.js"
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class skillPage extends Component {

  state = {
    user:"",
    skill:"",
    goal:"",
    steps:[]

  };


  // componentDidMount(){
  //   LoginPage.loadUser();
  // }

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


  return(

    <div class="container">
      <div class="row">
        <div class="col-md-8">
         <div class="panel panel-default">
            <div class="panel-heading">
              <h1 class="panel-title"><strong>Define your Skill</strong></h1>
            </div>
            <div class="panel-body pItems row">
              <div class="col-md-12">
                <div class="form-group">
                  <label for="name">What do you want to learn?</label>
                  <input type="string" name ="skill" value={this.state.skill} onChange ={this.handleInputChange} class="form-control" placeholder="I want to learn how to..."/>
                </div>
                <div class="form-group">
                  <label for="">Do some research, what is your goal?</label>
                  <input type="string" name ="goal" value ={this.state.goal} onChange  ={this.handleInputChange} class="form-control" placeholder="After 20 hours, I want to..."/>
                </div>
                <div class="form-group">
                  <label for="msg">Break your path down into five clear steps.</label>
                  <textarea class="form-control" rows="1" placeholder="The first step is..."></textarea>
                  <textarea class="form-control" rows="1" placeholder="The second step is..."></textarea>
                  <textarea class="form-control" rows="1" placeholder="The third step is..."></textarea>
                  <textarea class="form-control" rows="1" placeholder="The fourth step is..."></textarea>
                  <textarea class="form-control" rows="1" placeholder="The final step is..."></textarea>
                </div>
                <div class="form-group">
                <button type="success" onClick={this.handleFormSubmit} class="btn btn-success">Submit</button>
                </div>
              </div>
            </div>
         </div>
        </div>

    </div>
    </div>

  )
}

}

const mapStateToProps = (state) =>({


name:state.user.name,
email:state.user.email,
password:state.user.password,
skill:state.user.skill,
goal:state.user.goal,
steps:state.user.skills



})



export default connect(mapStateToProps)(skillPage);
