import "./App.css";
import React, { Component } from "react";
import Chao from './components/ChaoSection/Chao/index';
import UserCard from './components/UserSection/UserCard/index';
import UserList from "./components/UserSection/UserList";


const App = () => {
  const user = {
    id:1,
    fname:'Tom'
  }
  const user2 = {
    id:2,
    fname:'Elon',
  }
  const user3 = {
    id:3,
    fname:'Elen',
  }
  return <>
    {/* <Chao name = {user.fname} id={user.id}/> */}
    {/* <UserCard user={user2}/> */}
    <UserList users={[user,user2,user3]}/>
  </>;
};
export default App;
