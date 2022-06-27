import React, { Component } from 'react';
import { format, add, getWeeksInMonth } from 'date-fns';
import SectionMonth from './SectionMonth/index';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }
  handlerBtn = (options)=>{
    const {date} = this.state;
    const newDate = add(date, options);
    this.setState({date:newDate})
  }
//получить количество недель в месяце
//день недели, с которого начался текущий месяц

  
  render() {
    const {date} = this.state;
    const result = getWeeksInMonth(date)
    return (
      <div>
        <p>{result}</p>
        <p>{format(date, "dd MMMM yyyy'year', cccc")}</p>
        <button onClick={()=>this.handlerBtn({days:1})}>+1 day</button>
        <button onClick={()=>this.handlerBtn({weeks:1})}>+1 week</button>
        <button onClick={()=>this.handlerBtn({months:1})}>+1 month</button>
        <SectionMonth />
      </div>
    );
  }
}

export default Calendar;
