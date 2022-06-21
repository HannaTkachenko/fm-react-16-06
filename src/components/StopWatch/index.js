import React, { Component } from 'react';

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {count:0};
    this.idInterval = null;
  }
  tick=()=>{this.setState({count:this.state.count+1})}
  start = ()=>{
    this.stop();
    this.idInterval = setInterval(this.tick, 1000)
  }
  stop = ()=>{
    clearInterval(this.idInterval);
    this.idInterval = null;
  }
  reset = ()=>{
    this.stop();
    this.setState({count:0})
  }

  componentDidMount(){
    this.start();
  }
  componentDidUpdate(){
  }
  componentWillUnmount(){
    this.stop();
  }
  
  render() {
    const {count} = this.state;  
    return (
      <article>
        <h2>{count}</h2>
        <button onClick={this.start}>START</button>
        <button onClick={this.reset}>RESET</button>
        <button onClick={this.stop}>STOP</button>
      </article>
    );
  }
}

export default StopWatch;
