import React from "react";
import { deletePost } from "../services/PostService"; // Replace with your actual PostService
import { useNavigate, useParams } from "react-router";

export const DeletePostButton = ({ updatePostsState }) => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await deletePost(postId); // Replace with actual API call
      navigate("/posts");
      updatePostsState();
    } catch (error) {
      console.error("Error deleting post:", error);
      // Handle error as needed
    }
  };

  return (
    <button onClick={handleDelete} className="btn btn-danger">
      Delete Post
    </button>
  );
};

// Usage: <DeletePostButton updatePostsState={updatePostsState} />
