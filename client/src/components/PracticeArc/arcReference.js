import React, { Component } from 'react';
import PracticeArc from './PracticeArc';

//this component needs to be fed a var with the total number of hours for a user
//it should imported as hoursPracticed

//var pComp = hoursPracticed/20

var pComp = .2

class App extends Component{
  constructor(props){
    super(props);
    this.state = {percentComplete: pComp};
//    this.togglePercent = this.togglePercent.bind(this);
  }


  componentWillRecieveProps(){

    this.forceUpdate();
  }

  

//  togglePercent(){
//    const percentage = this.state.percentComplete === 0.3 ? 0.7 : 0.3;
//    this.setState({percentComplete: percentage});
//  }

    render(){
      console.log(this.state.percentComplete);
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

export default App;
