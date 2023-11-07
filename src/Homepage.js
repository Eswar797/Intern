import React from 'react';
import { Link } from 'react-router-dom';
import data from './data.json';

function Homepage() {
  const items = data.items;

  return (
    <div>
      <h1>Homepage</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded shadow">
            <img src={`/${item.image}`} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <Link to={`/item/${item.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
