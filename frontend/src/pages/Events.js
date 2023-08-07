import React from 'react';
import { json, useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

export default function EventsPage() {
  const data = useLoaderData();
  const events = data.events; // can automatically extract data from the response

  return <EventsList events={events} />;
}

export async function loader() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events.' };
    // throw { message: 'Could not fetch events.' };
    // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
    //   status: 500,
    // });
    throw json(
      { message: 'Could not fetch events.' },
      {
        status: 500,
      }
    ); // creates response object in json format and even use the data don't need to parse it to Javascript object!!!
  } else {
    // const resData = await response.json(); //extract data from the response
    // return resData.events;
    return response;
  }
}
