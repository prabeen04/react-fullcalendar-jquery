import React, { Component } from 'react';
import $ from 'jquery';
import CalendarWrapper from './components/calendar-wrapper';
import './App.css';

class App extends Component {
  render() {
    console.log($)
    return (
     <CalendarWrapper/>
    );
  }
}

export default App;
