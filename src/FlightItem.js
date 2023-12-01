import React from 'react';

const FlightItem = ({ flight }) => {
  return (
    <li>
      <strong>{flight.flightNumber}</strong> - {flight.status}
    </li>
  );
}

export default FlightItem;