import React, { Component } from 'react';
import $ from 'jquery';
import 'fullcalendar/dist/fullcalendar.css';
// import 'fullcalendar/dist/fullcalendar.print.min.css';
import 'fullcalendar/dist/fullcalendar.js';

class Calendar extends Component {
  constructor(props){
    super(props)
    // this.calendarRef = React.createRef();
    this.updateEvents = this.updateEvents.bind(this);
  }
  updateEvents = () => {
    return this.props.events.map((event, index)=>{
        return <p key={index}>{event.title}</p>
    })
  }
  updateEvents = (eventsList) => {
    console.log(this.props.events)
    $(this.el).fullCalendar('destroy')
    $(this.el).fullCalendar({
      header:{
        left:   'month,week,day,agenda',
        center: 'title',
        right:  'today prev,next'
      },
      selectable: true,
      height: 550,
      events: eventsList
    })
  }
  componentDidMount() {
    this.updateEvents(this.props.events);
  }
  componentDidUpdate() {
    this.updateEvents(this.props.events);
  }
  componentWillUnmount(){
    $(this.el).fullCalendar('destroy')
  }
  render() {
    return (
      <div>
        <div ref={el => this.el = el}></div>
        {/* {this.renderEvents()} */}
      </div>
    )
  }
}

export default Calendar