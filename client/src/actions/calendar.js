import React from 'react';
import $ from 'jquery';
const moment = require('moment');
import 'fullcalendar';
import axios from 'axios'

const Calendar = () => {
  $(function() {
    $('#calendar').fullCalendar({
      // adds buttons for swaping the view and gives a title to the calendar (typically the date range of the view being showed.)
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },

      footer: {
        // same layout as header if you want to add anything to bottom of calendar.
      },

      // these allow calender elements to be moveable droppable not sticky and shows exactly what time it is on the calender
      droppable: true,
      editable: true,
      selectable: true,
      selectHelper: true,
      unselectAuto: false,
      nowIndicator: true,

      // alows drag and release creation of events
      select: function(start, end, allDay) {
        var title = prompt('Event Title:');
        var description = prompt('Event Description?')
        if (title) {
            $('#calendar').fullCalendar('renderEvent',
                {
                    title: title,
                    start: start,
                    end: end,
                    description: description,
                    allDay: false
                },
                true // make the event "stick"
            );

            axios.post('calendar', {
              title: title,
              description: description,
              start: start,
              end: end
            }).then(res => {
              console.log('event sent to server')
            }).catch(err => {
              console.log(err)
            })

        }
        $('#calendar').fullCalendar('unselect');
      },

      // allows users to drag and drop events to reschedule them.
      eventDrop: function(event, delta, revertFunc) {
        let eventId = event.id
        let timeChange = delta._data

        axios.post('dragAndDrop', {
          eventId: eventId,
          timeChange: timeChange
        })
        .then(res => {
          console.log('dragAndDrop event sent to server')
        })
        .catch(err => {
          console.log(err)
        })
      },

      // grabs all events from db to display on calendar
      events: function(start, end, timezone, callback) {
        axios.get('calendar')
        .then((res) => {
          var events = []
          res.data.forEach((event) => {
            events.push({
              title: event.title,
              description: event.description,
              start: event.start,
              end: event.end,
              id: event.id
            })
          })
          callback(events)
        }).catch((err) => {
          console.log(err)
        })
      },

      // attatches a description to event (possibly going to attatch this to a tooltip)
      eventRender: function(event, element) {
        if (event.description) {
          element.find('.fc-title').append("<br/>" + event.description);
        }
      },


      minTime: '04:00:00', // when the calendar starts the day.
      // maxTime: '22:00:00', // when the calender ends the day.



      eventMouseover: function ( event, jsEvent, view ) {
        //placeholder for potential mouseover stuffs
        //$(this).css('background-color', 'blue')
       },

      eventMouseout: function ( event, jsEvent, view ) {
        //also toggles for leaving after a click, will prob need to change
        //$(this).css('background-color', 'black')
      },

      eventClick: function ( event, jsEvent, view ) {
        //will likely use to select events not necesarily change color
         console.log($(this))
      }
    });
  });

// all you need to do is import Calender in a file and then call the calendar()
//    within to have it be displayed.
return (
    <div>
      <div id='calendar'></div>
    </div>
  )
}




export default Calendar
