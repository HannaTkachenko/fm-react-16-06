import React from 'react';

const UserCard = (props) => {
  const {id, fname} = props.user;
  return (
    <article>
      <h2>{id}: {fname}</h2>
    </article>
  );
}

export default UserCard;
