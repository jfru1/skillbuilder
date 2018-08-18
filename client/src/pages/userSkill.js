import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { updateUser,createSkill } from '../actions/index';
import API from '../utils/API.js'
import Skillform from '../components/Form/skillForm.js'
import YourPage from '../pages/YourPage'

class skillPage extends React.Component {



  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
        email:'',
        name:'',
        skill: '',
        goal: '',
        step1:'',
        step2:'',
        step3:'',
        step4:'',
        step5:'',
      }




    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
};

componentWillMount(){

  this.setState({
    email:this.props.email,
    name:this.props.name,
    skill:this.props.skill,
    goal:this.props.goal,
    step1:this.props.step1,
    step2:this.props.step2,
    step3:this.props.step3,
    step4:this.props.step4,
    step5:this.props.step5,


  });
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


      this.props.callApi(event, this.state)


    };


render(){

  return(
    <div>

    {this.props.skill ? (
      <div>
<YourPage/>
      </div>


    ) : (


      <Skillform
      onSubmit={this.handleFormSubmit}
      onChange={this.handleInputChange}
      errors={this.state.errors}
      user={this.state}
      />

                )}
                  </div>

                )}


};

const mapStateToProps = (state) =>({


// name:state.user.name,
email:state.user.email,
// password:state.user.password,
skill:state.user.skill,
// goal:state.user.goal,
// step1:state.user.step1,
// step2:state.user.step2,
// step3:state.user.step3,
// step4:state.user.step4,
// step5:state.user.step5,



})



const mapDispatchToProps = (dispatch) => ({
  callApi: (value, state) => {
    API.saveSkills(state)
    .then(function(res){
      console.log(res.data)
      dispatch(createSkill(res.data))

    })
  }


})



export default connect(mapStateToProps,mapDispatchToProps)(skillPage);
