import React, { useState, useEffect } from 'react';
import FlightItem from './FlightItem';

function FlightList() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetch('/flights.json')
      .then((response) => response.json())
      .then((data) => setFlights(data));
  }, []);

  return (
    <div>
      <h2>Flight List</h2>
      <ul>
        {flights.map((flight) => (
          <FlightItem key={flight.id} flight={flight} />
        ))}
      </ul>
    </div>
  );
}

export default FlightList;