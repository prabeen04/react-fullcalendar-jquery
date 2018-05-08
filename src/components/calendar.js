import React, { Component } from 'react';
import $ from 'jquery';
import 'fullcalendar/dist/fullcalendar.css';
// import 'fullcalendar/dist/fullcalendar.print.min.css';
import 'fullcalendar/dist/fullcalendar.js';

class Calendar extends Component {
  constructor(props){
    super(props)
    // this.calendarRef = React.createRef();
    this.renderEvents = this.renderEvents.bind(this);
  }
  renderEvents = () => {
    return this.props.events.map((event, index)=>{
        return <p key={index}>{event.title}</p>
    })
  }
  componentDidMount(){
    // this.$node = $(this.calendarRef);
    $(this.el).fullCalendar({
      header:{
        left:   'month,week,day,agenda',
        center: 'title',
        right:  'today prev,next'
      },
      selectable: true,
      events: this.props.events
    })
  }
  render() {
    console.log(this.calendarRef)
    return (
      <div>
        <div ref={el => this.el = el} style={{height: '600px'}}></div>
        {/* {this.renderEvents()} */}
      </div>
    )
  }
}

export default Calendar