import React, { Component } from 'react';
import Counter from '../Counter';

class StepCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step:1,
    }
  }

  handlerInput = ({target:{name, value}})=>{
    this.setState({[name]:Number(value)})
  }
  
  render() {
    const {step} = this.state;
    return (
      <>
        <input type="range" 
        name='step'
        onChange={this.handlerInput}
        min='1' max='10' step='1'
        value={step}
        />
        <h2>step: {step}</h2>
        <Counter step={step}/>
      </>
    );
  }
}

export default StepCounter;
