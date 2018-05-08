import React, { Component } from 'react';
import Calendar from './calendar';
import CalendarForm from './calendar-form';
import axios from 'axios';
const baseUrl = 'https://prabeen-restapi.herokuapp.com/api/events';

class CalendarWrapper extends Component {
    componentDidMount() {
        axios.get(baseUrl)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        return (
            <div>
                <h1>Fullcalendar goes here</h1>
                <Calendar />
                <CalendarForm />
            </div>
        )
    }
}

export default CalendarWrapper;