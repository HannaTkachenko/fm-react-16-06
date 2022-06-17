import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Chao from "./components/Chao";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStraightSortId: true,
      isStraightSortName: true,
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
  sortUsersByName = () => {
    const { users, isStraightSortName } = this.state;
    const copyUsers = [...users];
    //const copyUsers = JSON.parse(JSON.stringify(users));
    copyUsers.sort((prev, next) => {
      if(prev.fname < next.fname){
        return isStraightSortName ? -1 : 1;
      }
      if(prev.fname > next.fname){
        return isStraightSortName ? 1 : -1;
      }
    });
    this.setState({
      users: copyUsers,
      isStraightSortName: !isStraightSortName,
    });
  };
  sortUsersById = () => {
    const { users, isStraightSortId } = this.state;
    const copyUsers = [...users];
    //const copyUsers = JSON.parse(JSON.stringify(users));
    copyUsers.sort((prev, next) => {
      return isStraightSortId ? prev.id - next.id : next.id - prev.id;
    });
    this.setState({ 
      users: copyUsers, 
      isStraightSortId: !isStraightSortId 
    });
  };
  render() {
    const {
      users,
      isStraightSortId: isUp,
      isStraightSortName: isAlpha,
    } = this.state;
    return (
      <>
        <button onClick={this.sortUsersByName}>
          sort by name {isAlpha ? "Up" : "Down"}
        </button>
        <button onClick={this.sortUsersById}>
          sort by id {isUp ? "Up" : "Down"}
        </button>
        {users.map(({ id, fname }) => (
          <Chao key={id} id={id} name={fname} />
        ))}
      </>
    );
  }
}
export default App;
