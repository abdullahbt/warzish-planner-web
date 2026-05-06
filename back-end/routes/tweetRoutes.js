import { Router } from 'express';
import {
    getAllTweets,
    createTweet,
    likeTweet,
    commentOnTweet,
    getTweetById,
    deleteTweet
} from '../controllers/tweetController.js';
import { authenticateToken } from './authRoutes.js';

const router = Router();

// Get all tweets
router.get('/', authenticateToken, getAllTweets);

// Create a new tweet
router.post('/', authenticateToken, createTweet);

// Get a single tweet
router.get('/:tweetId', authenticateToken, getTweetById);

// Like/unlike a tweet
router.post('/:tweetId/like', authenticateToken, likeTweet);

// Comment on a tweet
router.post('/:tweetId/comment', authenticateToken, commentOnTweet);

// Delete a tweet
router.delete('/:tweetId', authenticateToken, deleteTweet);

export default router;