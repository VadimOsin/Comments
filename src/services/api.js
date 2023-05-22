// api.js
import axios from 'axios';

export const getPosts = () => axios.get('https://jsonplaceholder.typicode.com/posts');
export const getCommentsByPostId = (postId) => axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
