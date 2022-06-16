import { Component } from "react";

class Chao extends Component {
  render() {
    const {name} = this.props;
    return <h2>Hi! {name}!</h2>;
  }
}

export default Chao;