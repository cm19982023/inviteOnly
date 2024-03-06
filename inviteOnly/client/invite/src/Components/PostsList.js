import React, { useState, useEffect } from "react";
import { getAllPosts } from "../Managers/PostsManager";
import { Posts } from "./Posts.js";
import { PostsForm } from "./PostsForm";

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = () => (allPosts => setPosts(allPosts)); 

  const updatePostsState = () => {
    return getAllPosts()
    .then((postArray) => {
        setPosts(postArray)
    })
  }
  useEffect(() => {
     updatePostsState();
  }, []); 
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="cards-column">
        <PostsForm updatePostsState = {getPosts}/>
          {posts.map((post) => (
            <Posts key={post.id} post={post}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostsList;