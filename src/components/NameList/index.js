import React, { Component } from 'react';

class NameList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names:[],
      error:null,
      isFetching: false
    }
  }

  componentDidMount(){
    this.setState({isFetching:true});
    fetch('/name.json')
      .then((res)=>res.json())
      .then((data)=>this.setState({names:data}))
      .catch((error)=>this.setState({error:error}))
      .finally(()=>this.setState({isFetching:false}))
  }
  
  render() {
    const {names, error, isFetching} = this.state;
    if(error){return <p>Error!</p>}
    if(isFetching){return <p>Loading!</p>}
    return (
      <ul>
        {
          names.map(({id, fname})=><li key={id}>{fname}</li>)
        }
      </ul>
    );
  }
}

export default NameList;
