import React, { Component } from 'react';

class Calendar extends Component {
  constructor(props){
    super(props)

    this.renderEvents = this.renderEvents.bind(this);
  }
  renderEvents = () => {
    return this.props.events.map((event, index)=>{
        return <p key={index}>{event.title}</p>
    })
  }
  render() {
    return (
      <div>
        <h2>Calendar</h2>
        {this.renderEvents()}
      </div>
    )
  }
}

export default Calendar