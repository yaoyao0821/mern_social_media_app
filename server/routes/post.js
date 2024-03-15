import express from 'express';

import { getPosts, createPost } from '../controllers/posts.js'
/**
 * Post Cards, /posts
 */
// http://localhost:5000/posts
const router = express.Router()

router.get('/', getPosts)
router.post('/', createPost)
// router.get('/:id', getPost);
// router.patch('/:id', updatePost);
// router.delete('/:id', deletePost);
// router.patch('/:id/likePost', likePost);
export default router