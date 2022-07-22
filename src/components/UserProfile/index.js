import React, {useContext} from 'react';
import {UserContext} from '../../context';

const UserProfile = () => {
  const {name} = useContext(UserContext);
  return (
    <div>
      <h2>Hi, {name}</h2>
    </div>
  );
}

export default UserProfile;
