import React from "react";
import { Route, Routes } from "react-router-dom";
import PostsList from "./Components/PostsList";

export default function ApplicationViews() {

 return(
      <Routes>
        <Route path="/posts" element={<PostsList />}/>
      </Routes>
   );
 
}