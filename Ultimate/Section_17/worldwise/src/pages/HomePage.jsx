import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import PageNav from '../components/PageNav';

function HomePage() {
  return (
    <div>
      <PageNav/>
      <h1>WorldWise</h1>

      {/* <a href='/pricing'>Pricing</a> */}
      {/* the problem with anchor that whenever we click on it , it will refresh the page */}

      <NavLink to="/pricing">Pricing</NavLink>
    </div>
  );
}

export default HomePage