import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }
  increment = ()=>{this.setState((state, props) => ({
    count: state.count + props.step
  }))}
  decrement = ()=>{this.setState((state, props) => ({
    count: state.count - props.step
  }))}
  
  render() {
    const {count} = this.state;
    return (
      <section>
        <h2>count: {count}</h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </section>
    );
  }
}
Counter.defaultProps = {
  step:1
};
Counter.propTypes = {
  step:PropTypes.number
};

export default Counter;
