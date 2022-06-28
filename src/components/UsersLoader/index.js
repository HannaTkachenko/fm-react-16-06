import React, { Component } from "react";

class UsersLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isFetching: true,
      isError: false,
      pageNum: 1
    };
  }

  showUser = (user) => (
    <li key={user.login.uuid}>
      {user.name.first} {user.name.last}
    </li>
  );

  componentDidMount() {
    const {pageNum} = this.state;
    fetch(`https://randomuser.me/api/?results=15&page=${pageNum}&seed=users&nat=gb`)
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
  componentDidUpdate(prevProps, prevState) {
    const {pageNum} = this.state;
    if (pageNum !== prevState.pageNum){  
    fetch(`https://randomuser.me/api/?results=15&page=${pageNum}&seed=users&nat=gb`)
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
  }
  prevPage=()=>{
    if(this.state.pageNum >1){
      this.setState((state)=>({pageNum:state.pageNum-1}))
    }
  }
  nextPage=()=>this.setState((state)=>({pageNum:state.pageNum+1}))

  render() {
    const { users, isError, isFetching, pageNum } = this.state;
    if (isFetching) {
      return <p>Loading...</p>;
    }
    if (isError) {
      return <p>Error</p>;
    }
    return (
      <section>
        <h2>Users List</h2>
        <button onClick={this.prevPage}>&lt;</button>
        <button onClick={this.nextPage}>&gt;</button>
        <span> page: {pageNum}</span>
        <ul>{users.map(this.showUser)}</ul>
      </section>
    );
  }
}

export default UsersLoader;
