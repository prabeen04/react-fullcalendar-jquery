import React, { Component } from 'react';
import $ from 'jquery';
import 'fullcalendar/dist/fullcalendar.css';
import 'fullcalendar/dist/fullcalendar.print.min.css';
import 'fullcalendar/dist/fullcalendar.js';

class Calendar extends Component {
  constructor(props){
    super(props)
    this.calendarRef = React.createRef();
    this.renderEvents = this.renderEvents.bind(this);
  }
  renderEvents = () => {
    return this.props.events.map((event, index)=>{
        return <p key={index}>{event.title}</p>
    })
  }
  componentDidMount(){
    $(this.calendarRef).fullCalendar()
  }
  render() {
    console.log(this.calendarRef)
    return (
      <div>
        <h2>Calendar</h2>
        <div ref={this.calendarRef}></div>
        {/* {this.renderEvents()} */}
      </div>
    )
  }
}

export default Calendar