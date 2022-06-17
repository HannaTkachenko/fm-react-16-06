import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Chao from "./components/Chao";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      users:[
        {
          id:1,
          fname:'Elon'
        },
        {
          id:2,
          fname:'Rob'
        },
        {
          id:3,
          fname:'Tom'
        },
        {
          id:4,
          fname:'Alex'
        },
        {
          id:5,
          fname:'Max'
        },
      ]
    }
  }
  render() {
    const {users}  = this.state;
    return <>
      <Chao name={users[0].fname}/>
      <Chao name={users[1].fname} />
      <Chao name={users[2].fname}/>
    </>;
  }
}

export default App;
