// Posts.js
import React, { useState, useEffect } from 'react';
import PostsService from './PostsServiceApi';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch all posts from your API or service
    PostsService.getAllPosts()
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div>
      <h2>All Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
