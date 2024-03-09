import React, { useState, useEffect } from "react";
import { GetPostById } from "./PostsManager"
import { useParams, useNavigate } from "react-router-dom";
// import "./Posts.css"
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { PostsList } from "./PostsList;"



export const PostsDetails = () => {
    const [postsDetails, setPostsDetails] = useState({});
    const { id } = useParams();
    useEffect(() => {
        GetPostById(id)
            .then((data) =>
            {setPostsDetails(data);
            })
            .catch((error) => {
                console.log("Error fetching user posts:", error);
            });
    }, []);
    const navigate = useNavigate()
    
    
    return (
    <>
   
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-lg-6">
        <Card className="m-4">
      <CardBody>
        <p>
        <Link to={`/Posts/${postsDetails.id}`}>
            <strong>Title: {postsDetails.title}</strong>
        </Link>
        </p>
        <p>{postsDetails.Body}</p>
      
        <p className="text-left px-2">Posted by: <Link to={`/Users/${postsDetails.UserId}`}> {postsDetails.Users}</Link>
        </p>
        <p className="text-left px-2">Created: {postsDetails.DateCreated}
        </p>
        <button
           onClick={() => navigate(`/Posts/${postsDetails.id}/Posts/Add`)}
           >Add Post</button>
        <PostsList postId={id}/>
      </CardBody>
    </Card>
        </div>
      </div>
    </div>
    </>
    )}