import { Component } from "react";
import PropTypes from 'prop-types';

class Chao extends Component {
  /**
   * 
   * @param {*} props 
   * @param {string} props.name 
   * @param {number} props.id 
   */
  constructor(props){
    super(props);
    this.state = {isHi:true};
  }
  switchState = ()=>{ 
    const {isHi} = this.state;   
    this.setState({isHi:!isHi}); 
  }
  render() {
    const {name, id} = this.props;
    const {isHi} = this.state;

    if(isHi){
      return <>
        <h2>{id}) Hi! {name}!</h2>
        <button onClick={this.switchState}>Switch</button>
      </>
    }
    return <p>{id}) Bye, {name}!</p>;
  }
}

Chao.propTypes = {
  name:PropTypes.string.isRequired,
  id:PropTypes.number.isRequired,
}

export default Chao;