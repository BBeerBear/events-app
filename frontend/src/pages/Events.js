import React from 'react';
import { Link } from 'react-router-dom';

export default function EventsPage() {
  const DUMMY_EVENTS = [
    { id: 'e1', title: 'Some event' },
    { id: 'e2', title: 'Someevent2' },
  ];
  return (
    <>
      <h1>EventPage</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={`${event.id}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
