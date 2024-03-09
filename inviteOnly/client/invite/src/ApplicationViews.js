import React from "react";
import { Route, Routes } from "react-router-dom";
import PostsList from "./PostsList";
import { AddPosts } from "./PostsForm";
import { PostsDetails } from "./PostsDetails";

export default function ApplicationViews() {

 return(
      <Routes>
        <Route path="/Posts/:postId" element={<PostsList />}/>
        <Route path='/Posts/:postId/Posts/Add' element={<AddPosts />} />
        <Route path="/Posts/:id" element={<PostsDetails /> } />
      </Routes>
   );
 
}