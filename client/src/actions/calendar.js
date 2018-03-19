import React from 'react';
import $ from 'jquery';
const moment = require('moment');
import 'fullcalendar';
import axios from 'axios'

const Calendar = (props) => {
  $(function() {
    $('#calendar').fullCalendar({

      header: {
        left: 'prev,next today',
        center: 'title', // same name as line 35 if want to add other buttons to do stuffs
        right: 'month,agendaWeek,agendaDay'
      },


      droppable: true,
      editable: true,
      selectable: true,
      selectHelper: true,
      unselectAuto: false,
      nowIndicator: true,



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


      events: [
          props,
          {
            title: 'Tumble22',
            start: '2018-03-16T12:30:00',
            end: '2018-03-16T13:30:00',
            description: 'OG Southern Chicken Sandwhich, Dang hot, with a side of chips, for here please.'
          },
          {
            title: 'Happy Chick',
            start: '2018-03-17T11:30:00',
            end: '2018-03-16T12:30:00',
            description: 'Classic Chic, spicy, with honey siracha and ranch, to go please.'
          },
      ],


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


return (
    <div>
      <div id='calendar'></div>
    </div>
  )
}




export default Calendar
