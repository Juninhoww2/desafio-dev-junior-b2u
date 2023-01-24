import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className='home'>
      <h1>Welcome to Car Advertisements</h1>
      <p>This is a website where you can find and post your cars for sale.</p>
      <nav>
        <Link to="/cars">View all cars</Link>
      </nav>
    </div>
  );
}

export default Home;