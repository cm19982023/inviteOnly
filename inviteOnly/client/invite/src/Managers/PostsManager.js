import React from "react";

const baseUrl = '/api/Posts';

export const getAllPosts = () => {
  return fetch(baseUrl) 
    .then((res) => res.json())
};

export const getPostsById = (id) => {
    return fetch(`${baseUrl}/${id}`)
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