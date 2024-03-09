import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetPostById, addPosts } from "./PostsManager"; //  in PostsManager
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

export const AddPosts = () => {
	const { postId } = useParams();
	const user = JSON.parse(localStorage.getItem("Users"));
	const navigate = useNavigate();
	const [newPost, setNewPost] = useState({
		Id: postId,
		UserId: parseInt(user.id),
		CommunityId: parseInt(user.CommunityId),
		Title: "",
		Body: "",
		DateCreated: "",
	});
	const [post, setPost] = useState([]);

	const handleAddPosts = (e) => {
		e.preventDefault();
		const copy = { ...newPost };
		copy.DateCreated = new Date();
		addPosts(copy).then(() => navigate(`/Posts/${postId}`));
	};
	useEffect(() => {
		GetPostById(postId).then((posts) => setPost(posts));
	}, [postId]);

	
	return (
		<Container>
			<h3 className='my-4'>Add a new post: {post.Title}</h3>
			<Form>
				<FormGroup className='mb-4'>
					<Label for='Title'>Subject</Label>
					<Input
						id='Title'
						name='Title'
						type='text'
						onChange={(e) => {
							e.preventDefault();
							const copy = { ...newPost };
							copy.Title = e.target.value;
							setNewPost(copy);
						}}
					/>
				</FormGroup>
				<FormGroup className='mb-4'>
					<Label for='Body'>Body</Label>
					<Input
						id='Body'
						name='Body'
						type='textarea'
						onChange={(e) => {
							e.preventDefault();
							const copy = { ...newPost };
							copy.Body = e.target.value;
							setNewPost(copy);
						}}
					/>
				</FormGroup>
				<Button color='primary' onClick={(e) => handleAddPosts(e)}>
					Save
				</Button>
			</Form>
		</Container>
	);
};

