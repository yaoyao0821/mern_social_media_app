import express from 'express';

import { signin, signup } from '../controllers/users.js'
/**
 * Users
 * http://localhost:5000/users
 */

const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);

export default router