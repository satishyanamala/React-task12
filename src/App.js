import React from 'react';
import Home from './Components/Home';
import './App.css'; 

const blogsList = [
  {
    id: 1,
    title: 'Blog Post 1',
    description: 'This is the description for blog post 1.',
    publishedDate: 'Jan 1, 2023',
  },
  {
    id: 2,
    title: 'Blog Post 2',
    description: 'This is the description for blog post 2.',
    publishedDate: 'Feb 1, 2023',
  },
  {
    id: 3,
    title: 'Blog Post 3',
    description: 'This is the description for blog post 1.',
    publishedDate: 'Jan 1, 2023',
  },
  {
    id: 4,
    title: 'Blog Post 4',
    description: 'This is the description for blog post 1.',
    publishedDate: 'Jan 1, 2023',
  },
  {
    id: 5,
    title: 'Blog Post 5',
    description: 'This is the description for blog post 1.',
    publishedDate: 'Jan 1, 2023',
  },
  
];

function App() {
  return (
    <div className="app">
      <Home blogsList={blogsList} />
    </div>
  );
}

export default App;
