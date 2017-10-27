import React, { Component } from 'react';
import PracticeArc from './PracticeArc';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { updateUser } from '../../actions/index';

class ClientArc extends Component{
  constructor(props){
    super(props);
    this.state = {
      hoursCompleted:"",
      percentComplete:""
    };
  }

componentWillMount(){

var perComplete = (parseInt(this.props.completed)/20)

this.setState({
percentComplete:perComplete

})

}



    render(){
      return (
        <div>
        <PracticeArc
          duration={2000}
          height={300}
          width={300}
          innerRadius={100}
          outerRadius={110}
          id="d3-arc"
          backgroundColor="#e6e6e6"
          foregroundColor="#00ff00"
          percentComplete={this.state.percentComplete}
          />
          </div>
        );
    }
}

const mapStateToProps = (state) =>({


completed:state.user.completed,


})

export default connect(mapStateToProps)(ClientArc);
