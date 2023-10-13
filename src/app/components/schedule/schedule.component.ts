import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: true,
    events: [
      {
        groupId: 'Leonard 6-9', // recurrent events in this group move together
        title: 'Leonard 6-9 (4 courts)',
        daysOfWeek: [ '1', '5' ],
        startTime: '18:00:00',
        endTime: '21:00:00',
        color: '#99d98c'
      },
      {
        groupId: 'UNCG 6-8', // recurrent events in this group move together
        title: 'UNCG 6-8 (9 courts)',
        daysOfWeek: [ '3' ],
        startTime: '18:00:00',
        endTime: '20:00:00',
        color: '#c1121f'
      },
      // {
      //   groupId: 'Training 7-9', // recurrent events in this group move together
      //   title: 'Training 7-9 (2 courts)',
      //   daysOfWeek: [ '3' ],
      //   startTime: '19:00:00',
      //   endTime: '21:00:00',
      //   color: '#ffd60a'
      // },
      {
        groupId: 'Leonard sat', // recurrent events in this group move together
        title: 'Leonard 2-5 (4 courts)',
        daysOfWeek: [ '6' ],
        startTime: '14:00:00',
        endTime: '17:00:00'
      }
    ]
  };
}

