import axios from 'axios';

const url = 'http://localhost:5000/posts';
// const url = 'https://mern-social-posts-app-f3ebfcaae5e8.herokuapp.com/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);

export const signIn = (formData) => axios.get(url);
export const signUp = (formData) => axios.get(url);