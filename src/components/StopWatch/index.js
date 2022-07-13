import React, { Component } from "react";
import styles from "./StopWatch.module.css";

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date(0, 0, 0, 0, 0, 0) };
    this.idInterval = null;
  }
  tick = () => {
    this.setState((state) => {
      const { time } = state;
      const newTime = new Date(time.getTime() + 1000);
      return { time: newTime };
    });
  };
  start = () => {
    this.stop();
    this.idInterval = setTimeout(this.tick, 1000);
  };
  stop = () => {
    clearInterval(this.idInterval);
    this.idInterval = null;
  };
  reset = () => {
    this.stop();
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0) });
  };

  componentDidMount() {
    this.start();
  }
  componentDidUpdate() {
    this.start();
  }
  componentWillUnmount() {
    this.stop();
  }

  render() {
    const { time } = this.state;
    return (
      <section className={styles["stopWatch-section"]}>
        <article className={styles.stopWatch}>
          <h2 className={styles.timer}>{time.toLocaleTimeString("it-IT")}</h2>
          <div className={styles["btn-container"]}>
            <button className={styles.start} onClick={this.start}>
              START
            </button>
            <button className={styles.reset} onClick={this.reset}>
              RESET
            </button>
            <button className={styles.stop} onClick={this.stop}>
              STOP
            </button>
          </div>
        </article>
      </section>
    );
  }
}

export default StopWatch;
