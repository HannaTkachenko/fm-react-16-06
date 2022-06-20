import React, { Component } from 'react';
import UserCard from '../UserCard';

class UserList extends Component {
  constructor(props) {
    super(props);
  }

  userSelector = (id)=>{
    const {users, setUserSelector} = this.props;
    const newUsers = users.map((user)=>({...user, 
      isSelected: id===user.id ? !user.isSelected : user.isSelected,
    }))
    setUserSelector(newUsers);
    //this.setState({users: newUsers})
  }

  mapUsers = (user)=> <UserCard  key={user.id} user={user} userSelector={this.userSelector}/>;
  
  render() {
    const {users} = this.props;
    return (
      <section>
        <h1>Users List</h1>
        {users.map(this.mapUsers)}
      </section>
    );
  }
}

export default UserList;
