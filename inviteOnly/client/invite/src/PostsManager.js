import React from "react";

const baseUrl = '/api/Posts';

//'https://localhost:5001/api/Posts/1

export const GetPostById = (postId) => {
    return fetch(`${baseUrl}/GetPostById?postId=${postId}`)
    .then((res) => res.json())
};

export const GetAllPosts = (postId) => {
  return fetch(`${baseUrl}/GetAllPosts?postId=${postId}`)
  .then((res) => res.json())
};



export const addPosts = (singlePost) => { 
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(singlePost),
  });
};