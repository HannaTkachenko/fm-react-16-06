import React from 'react';
import SubParent from '../SubParent/index';

const Parent = (props) => {
  return (
    <section>
      <h2>Parent</h2>
      <SubParent />
    </section>
  );
}

export default Parent;