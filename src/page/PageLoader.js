import React from 'react';
import DataProvider from '../components/DataProvider/index';

const PageLoader = () => {
  const getNames = ()=>{
    return fetch('/name.json')
    .then((res)=>res.json())
  }
  const getPhones = ()=>{
    return fetch('/phone.json')
      .then((res)=>res.json())
  }
  const getPhonesBook = ()=>{
    return fetch('/phoneBook.json')
      .then((res)=>res.json())
  }
  const renderPhoneBook = (state)=>{
    return (
      state.items.map(({id, fname, phone})=><article key={id}>
        <p>{fname}: <em>{phone}</em></p>
      </article>)
    )
  }
  return (
    <div>
      <h1>Loader</h1>
      <h2>PhoneBook</h2>
      <DataProvider getItems={getPhonesBook} render={renderPhoneBook}/>
      <h2>Name:</h2>
      <DataProvider getItems={getNames} render={
        (state)=>{
          return (
            <ul>
              {
                state.items.map(({id, fname})=><li key={id}>{fname}</li>)
              }
            </ul>
          )
        }
      }/>
       <h2>Phone:</h2>
      <DataProvider getItems={getPhones} render = {
        (state)=>{
          return (
            <ol>
              {
                state.items.map(({id, name, price})=><li key={id}>name:{name} (price: {price})</li>)
              }
            </ol>
          )
        }
      }/>
    </div>
  );
}

export default PageLoader;
