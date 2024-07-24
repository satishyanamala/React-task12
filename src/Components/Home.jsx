import React from 'react';
import UserProfile from './UserProfile';
import BlogList from './BlogList';

function Home({ blogsList }) {
  return (
    <div className="home">
      <UserProfile />
      <BlogList blogsList={blogsList} />
    </div>
  );
}

export default Home;
