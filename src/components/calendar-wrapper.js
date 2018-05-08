import React, { Component } from 'react';
import Calendar from './calendar';
import CalendarForm from './calendar-form';
import axios from 'axios';
const baseUrl = 'https://prabeen-restapi.herokuapp.com/api/events';

class CalendarWrapper extends Component {
    constructor(props) {
        super(props)

        this.state = {
            events: [],
            isFetching: false,
            isError: false
        }
    }

    componentDidMount() {
        axios.get(baseUrl)
            .then((res) => {
                this.setState({
                    events: res.data,
                    isFetching: false
                })
            })
            .catch((err) => {
                this.setState({
                    isError: true,
                    isFetching: false
                })
            })
    }
    render() {
        return (
            <div style={{backgroundColor: '#fff', margin: '1.5rem', padding: '1rem', height: '600px'}}>
                <Calendar events={this.state.events}/>
                <CalendarForm />
            </div>
        )
    }
}

export default CalendarWrapper;