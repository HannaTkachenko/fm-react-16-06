import React, { Component } from 'react';

const DaysOfWeek = ()=>{
  return <div>
   <span>s</span>
   <span>m</span>
   <span>t</span>
   <span>w</span>
   <span>t</span>
   <span>f</span>
   <span>s</span> 
  </div>;
}

class SectionMonth extends Component {
  render() {
    return (
      <div>
        <DaysOfWeek />
      </div>
    );
  }
}

export default SectionMonth;
