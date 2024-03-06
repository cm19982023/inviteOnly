import React, { useState, useEffect } from "react";
import { addPost } from "../services/PostService"; // Replace with your actual PostService
import { useNavigate } from "react-router";

export const PostForm = ({ updatePostsState }) => {
  const localinviteOnlyUser = localStorage.getItem("userProfile");
  const inviteOnlyUserObject = JSON.parse(localinviteOnlyUser);
  const navigate = useNavigate();


  useEffect(() => {
    getCategories();
  }, []);

  const [newPost, setNewPost] = useState({
    title: "",
    body: "",
    userId: inviteOnlyUserObject.id,
    communityId: 0, // Default value, assuming there's a "Select a community" option
    dateCreated: new Date().toISOString(),
  });

  const clickTheSaveButton = async (e) => {
    e.preventDefault();

    try {
      const post = await addPost(newPost);
      navigate(`/posts/${post.Id}`);
      // Assuming there's an 'updatePostsState' function to refresh the post list
      updatePostsState();
    } catch (error) {
      console.error("Error adding post:", error);
      // Handle error as needed
    }
  };

  const selectList = (event) => {
    const copy = { ...newPost };
    copy.communityId = parseInt(event.target.value);
    setNewPost(copy);
  };

  return (
    <>
      <form className="post-form">
        <h2 className="post-form-title">Create a New Post</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={newPost.title}
              onChange={(event) => {
                const copy = { ...newPost };
                copy.title = event.target.value;
                setNewPost(copy);
              }}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="body">Body:</label>
            <textarea
              id="body"
              value={newPost.body}
              onChange={(event) => {
                const copy = { ...newPost };
                copy.body = event.target.value;
                setNewPost(copy);
              }}
            />
          </div>
        </fieldset>
    
        <fieldset>
          <div className="form-group">
            <label htmlFor="community-select">Community</label>
            <select
              id="community-select"
              value={newPost.communityId}
              onChange={(event) => selectList(event)}
            >
              <option value={0}>Select a community</option>
              {categories.map((community) => (
                <option value={community.Id} key={community.Id}>
                  {community.Title}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
        <button
          onClick={(clickEvent) => clickTheSaveButton(clickEvent)}
          className="btn btn-primary"
        >
          Submit Post
        </button>
      </form>
    </>
  );
};
