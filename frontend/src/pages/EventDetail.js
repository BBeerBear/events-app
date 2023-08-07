import React from 'react';
import {
  json,
  useLoaderData,
  useParams,
  useRouteLoaderData,
} from 'react-router-dom';
import EventItem from '../components/EventItem';

export default function EventDetailPage() {
  // const params = useParams();
  // return <div>{params.eventId}</div>;
  const data = useRouteLoaderData('event-detail');
  return <EventItem event={data.event}></EventItem>;
}

// hooks can't be used in loader
// params contains an object with all route parameters
export async function loader({ request, params }) {
  const eventId = params.eventId;
  const response = await fetch('http://localhost:8080/events/' + eventId);
  if (!response.ok) {
    return json(
      { message: 'Could not fetch details for selected event.' },
      { status: 500 }
    );
  } else {
    return response;
  }
}
