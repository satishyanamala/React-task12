import React from 'react';


function BlogItem({ blog }) {
  const { title, description, publishedDate } = blog;

  return (
    <li className="blog-item">
      <div className="blog-header">
        <h2 className="blog-title">{title}</h2>
        <p className="blog-date">{publishedDate}</p>
      </div>
      <p className="blog-description">{description}</p>
    </li>
  );
}

export default BlogItem;
