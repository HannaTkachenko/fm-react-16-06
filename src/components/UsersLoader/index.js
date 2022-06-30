import React, { Component } from "react";
import { getUsers } from "../../api";
import Spinner from "../Spinner";
import config from '../../config';

class UsersLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isFetching: true,
      isError: false,
      pageNum: 1,
      currentNat: config.DEFAULT_NAT,
    };
    //this.handleChangeNat = this.handleChangeNat.bind(this)
  }

  showUser = (user) => (
    <li key={user.login.uuid}>
      {/* {JSON.stringify(user, null, 4)} */}
      {user.name.first} {user.name.last} (gender: {user.gender}) (nat:{" "}
      {user.nat})
    </li>
  );

  load = () => {
    const { pageNum, currentNat } = this.state;
    getUsers({ page: pageNum, nat: currentNat })
      .then((data) => {
        if (data.error) {
          return this.setState({
            isError: true,
          });
        }
        return this.setState({
          users: data.results,
        });
      })
      .catch((err) =>
        this.setState({
          isError: true,
        })
      )
      .finally(() => {
        this.setState({
          isFetching: false,
        });
      });
  };

  componentDidMount() {
    this.load();
  }
  componentDidUpdate(prevProps, prevState) {
    const { pageNum, currentNat } = this.state;
    const isUpdate = (pageNum !== prevState.pageNum) || (currentNat!==prevState.currentNat);
    if (isUpdate) {
      this.load();
    }
  }
  prevPage = () => {
    if (this.state.pageNum > 1) {
      this.setState((state) => ({ pageNum: state.pageNum - 1 }));
    }
  };
  nextPage = () => this.setState((state) => ({ pageNum: state.pageNum + 1 }));

  handleChangeNat=({target:{value}})=>{
    this.setState({
      currentNat: value,
    });
  }

  render() {
    const { users, isError, isFetching, pageNum, currentNat } = this.state;
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
        <span> page: {pageNum} </span>
        <select onChange={this.handleChangeNat} value={currentNat}>
          <option value="ch">CH</option>
          <option value="de">DE</option>
          <option value="fr">FR</option>
          <option value="gb">GB</option>
        </select>
        <span> amount:</span>
        <label><input type='radio' value={10} name="results"/>10</label>
        <label><input type='radio' value={20} name="results"/>20</label>
        <ul>{users.map(this.showUser)}</ul>
      </section>
    );
  }
}

export default UsersLoader;
