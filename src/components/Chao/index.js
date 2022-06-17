import { Component } from "react";

class Chao extends Component {
  render() {
    const {name, isHi} = this.props;
    const wordHi = isHi ? 'Hi' : 'Bye';
    return <>
      <h2>{wordHi}! {name}!</h2>
    </>
  }
}

export default Chao;