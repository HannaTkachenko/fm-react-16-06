import React, { Component } from 'react';
import UserCard from '../UserCard';

const userDB = [
  {
    id: 1,
    fname: "Elon",
  },
  {
    id: 2,
    fname: "Rob",
  },
  {
    id: 3,
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
];
class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users:userDB,
    }
  }

  mapUsers = (user)=> <UserCard  key={user.id} user={user}/>;
  
  render() {
    const {users} = this.state;
    return (
      <section>
        <h1>Users List</h1>
        {users.map(this.mapUsers)}
      </section>
    );
  }
}

export default UserList;
