import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'; 

const localizer = momentLocalizer(moment);


const initialEvents = [
  {
    id: 1,
    title: 'Sunday Service',
    start: new Date(2024, 8, 24, 10, 0), 
    end: new Date(2024, 8, 24, 12, 0),
  },
  {
    id: 2,
    title: 'Wednesday Evening Bible Study',
    start: new Date(2024, 8, 27, 19, 0),
    end: new Date(2024, 8, 27, 21, 0),
  },
  {
    id: 3,
    title: 'Annual Church Picnic',
    start: new Date(2024, 8, 30, 12, 0),
    end: new Date(2024, 8, 30, 14, 0),
  },
];

const ChurchCalendar = () => {
  const [events, setEvents] = useState(initialEvents);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Church Calendar</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default ChurchCalendar;
