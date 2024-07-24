import React from 'react';
import BlogItem from './BlogItem';


function BlogList({ blogsList }) {
  return (
    <ul className="blog-list">
      {blogsList.map(blog => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </ul>
  );
}

export default BlogList;
