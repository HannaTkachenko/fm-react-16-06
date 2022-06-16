import { Component } from "react";

class Chao extends Component {
  render() {
    const {name, photo} = this.props;
    return <>
      <h2>Hi! {name}!</h2>
      <img src={photo} alt={name}/>
    </>
  }
}

export default Chao;