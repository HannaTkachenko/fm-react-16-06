import React, { Component } from "react";
import {getUsers}  from '../../api';
import Spinner from "../Spinner";

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
    <li key={user.login.uuid}> {JSON.stringify(user, null, 4)}
      {/* {user.name.first} {user.name.last} (gender: {user.gender})
      (nat: {user.nat}) */}
    </li>
  );

  load=()=>{
    const {pageNum} = this.state;
    getUsers({page:pageNum, results:2, nat:'de', gender:'female'})
      .then((data) =>{
        if(data.error){
          return this.setState({
            isError: true,
          })
        }
        return this.setState({
          users: data.results,
        })
      })
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

  componentDidMount() {
    this.load();
  }
  componentDidUpdate(prevProps, prevState) {
    const {pageNum} = this.state;
    if (pageNum !== prevState.pageNum){  
    this.load();
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
      return <Spinner />;
    }
    if (isError) {
      return <p>Error</p>;
    }
    return (
      <section>
        {/* {isFetching && <p>Loading...</p>} */}
        {/* {isError && <p>Error</p>} */}
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
