import React from 'react';
import $ from 'jquery';
const moment = require('moment');
import 'fullcalendar';

const Calendar = (props) => {
  $(function() {
    $('#calendar').fullCalendar({
    defaultView: 'agendaWeek',

    header: {
      center: 'addEventButton'
    },
    events: [
        props,
      /*  {
          title: 'blah',
          start: '2018-03-16T12:30:00',
          end: '2018-03-16T13:30:00'
        },
        {
          title: 'blah2',
          start: '2018-03-17T11:30:00',
          end: '2018-03-16T12:30:00'
        }
        */
    ],
    minTime: '',

    customButtons: {
      addEventButton: {
        text: 'add event...',
        click: function() {

          //for most events we would just pull them in from db with all this info (also can prob make a clearer form for event input)
          var eventTitle = prompt('Event Title?');
          var dateStartStr = prompt('Enter a date in YYYY-MM-DDTHH:MM:SS format');
          var dateEndStr = prompt('Enter a end time in YYYY-MM-DDTHH:MM:SS format');
          var dateStart = moment(dateStartStr);
          var dateEnd = moment(dateEndStr);


          if (dateStart.isValid() && dateEnd.isValid()) {
            if (dateEnd.isValid()) {
              $('#calendar').fullCalendar('renderEvent', {
                title: eventTitle,
                start: dateStart,
                end: dateEnd,
              });
              alert('Great. Now, update your database...');
            } else {
              alert('Invalid End Date')
            }
          } else {
            alert('Invalid Start Date');
          }
        }
      }
    },

    eventMouseover: function ( event, jsEvent, view ) {
      //placeholder for potential mouseover stuffs
      $(this).css('background-color', 'blue')
     },

    eventMouseout: function ( event, jsEvent, view ) {
      //also toggles for leaving after a click, will prob need to change
      $(this).css('background-color', 'black')
    },

    eventClick: function ( event, jsEvent, view ) {
      //will likely use to select events not necesarily change color
       $(this).css('background-color', 'pink' || 'blue')
    }
  });
  });


return (
    <div>
      <div id='calendar'></div>
    </div>
  )
}



export default Calendar
