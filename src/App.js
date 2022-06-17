import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Chao from "./components/Chao";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user:{
        fullName: "Elon Musk"
      }      
    }
  }
  render() {
    const {user}  = this.state;
    return <>
      <Chao name={user.fullName}/>
      <Chao name="Elen Musk"  />
      <Chao name="Rob Bob"/>
    </>;
  }
}

export default App;
