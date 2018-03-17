import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Calendar from '../actions/calendar.js'


class Home extends React.Component {
    constructor(props) {
        super(props)


    }





    render() {
      let testEvent = {
        title: 'props test event',
        start: '2018-03-16T14:30:00',
        end: '2018-03-16T16:30:00'
      }

        return(
          <div>
            {Calendar(testEvent)}
          </div>
        )
    }
}

export default Home
