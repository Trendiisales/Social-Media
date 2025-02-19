import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000', // ✅ Backend URL
});

// Fetch all posts
export const fetchPosts = () => API.get('/posts');

// Create a new post
export const createPost = (newPost) => API.post('/posts', newPost);
