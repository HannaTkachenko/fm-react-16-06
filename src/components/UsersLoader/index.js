import React, { Component } from "react";

class UsersLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isFetching: false,
      isError: false,
    };
  }

  showUser = (user) => (
    <li key={user.login.uuid}>
      {user.name.first} {user.name.last}
    </li>
  );

  componentDidMount() {
    this.setState({ isFetching: true });
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          users: data.results,
        })
      )
      .catch((err) =>
        this.setState({
          isError: true,
        })
      )
      .finally(()=>{
        this.setState({
          isFetching: false,
        })
      })
  }

  render() {
    const { users, isError, isFetching } = this.state;
    if (isFetching) {
      return <p>Loading...</p>;
    }
    if (isError) {
      return <p>Error</p>;
    }
    return (
      <section>
        <h2>Users List</h2>
        <ul>{users.map(this.showUser)}</ul>
      </section>
    );
  }
}

export default UsersLoader;
