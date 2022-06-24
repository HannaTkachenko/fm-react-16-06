import React, { Component } from 'react';
import { format } from 'date-fns';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }
  
  render() {
    const {date} = this.state;
    return (
      <div>
        <p>{format(date, 'EEEE')}</p>
        //24 june 2022year, friday
      </div>
    );
  }
}

export default Calendar;
