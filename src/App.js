import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Chao from "./components/Chao";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStraightSortId:true,
      users: [
        {
          id: 3,
          fname: "Elon",
        },
        {
          id: 2,
          fname: "Rob",
        },
        {
          id: 1,
          fname: "Tom",
        },
        {
          id: 4,
          fname: "Alex",
        },
        {
          id: 5,
          fname: "Max",
        },
      ],
    };
  }
  sortUsers=()=>{
    const { users, isStraightSortId } = this.state;
    //const copyUsers = [...users];
    const copyUsers = JSON.parse(JSON.stringify(users));
    copyUsers.sort((prev, next)=>{
      return isStraightSortId? prev.id-next.id : next.id-prev.id 
    });
    this.setState({users:copyUsers, isStraightSortId:!isStraightSortId});
  }
  render() {
    const { users, isStraightSortId:isUp } = this.state;
    return (
      <>
      <button onClick={this.sortUsers}>sort by id {isUp?'Up':'Down'}</button>
      {users.map(({ id, fname }) => <Chao key={id} id={id} name={fname} />)}
      </>
    );
  }
}

export default App;
