import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class WindowSizes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      w:window.innerWidth,
      h:window.innerHeight
    }
  }
  handleWindowSizes = ()=>{
    this.setState({
      w:window.innerWidth,
      h:window.innerHeight
    })
  }
  componentDidMount(){
    window.addEventListener('resize',this.handleWindowSizes);
  }
  componentWillUnmount(){
    window.removeEventListener('resize',this.handleWindowSizes);
  }
  render() {
    const {w, h} = this.state;
    return (
      <div>
        <p>width:{w}</p>
        <p>height:{h}</p>
        <Link to='/'>Home</Link>
      </div>
    );
  }
}

export default WindowSizes;
