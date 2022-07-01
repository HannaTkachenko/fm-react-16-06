import React, { PureComponent, Component } from "react";
import PropTypes from "prop-types";
import styles from "./Counter.module.sass";

class Counter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState((state, props) => ({
      count: state.count + props.step,
    }));
  };
  decrement = () => {
    this.setState((state, props) => ({
      count: state.count - props.step,
    }));
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.step === this.props.step;
  // }

  render() {
    const { count } = this.state;
    const { step } = this.props;
    console.log("counter");
    return (
      <section className={styles.container}>
        <h2>count: {count}</h2>
        <h2>step: {step}</h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={()=>{this.setState({count})}}>SET STATE</button>
      </section>
    );
  }
}
Counter.defaultProps = {
  step: 1,
};
Counter.propTypes = {
  step: PropTypes.number,
};

export default Counter;


