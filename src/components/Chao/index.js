import { Component } from "react";

class Chao extends Component {
  constructor(props){
    super(props);
    this.state = {isHi:true};
  }
  switchState = ()=>{ 
    const {isHi} = this.state;   
    this.setState({isHi:!isHi}); 
  }
  render() {
    const {name} = this.props;
    const {isHi} = this.state;
    //const wordHi = isHi ? 'Hi' : 'Bye';
    return <>
      <h2>{isHi ? 'Hi' : 'Bye'}! {name}!</h2>
      <button onClick={this.switchState}>Switch</button>
    </>
  }
}

export default Chao;