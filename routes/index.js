const express = require('express');
const router = express.Router();

const UserController = require('../api/controllers/UserController');
const PostController = require('../api/controllers/PostController');
const AuthController = require('../api/controllers/AuthController');
const CommentController = require('../api/controllers/CommentController');


/*SignUp*/
router.post('/api/signup', UserController.saveImageFile, UserController.signUp);
router.get('/api/user/profile/:userId', UserController.findImage);

/*Profile*/
router.get('/api/profile', AuthController.ensureSignedIn, UserController.getProfile);

/*Post*/
router.post('/api/post/create', PostController.savePost);
router.get('/api/posts', PostController.showAllPosts);

/*PostLikes*/
router.post('/api/post/like', AuthController.ensureSignedIn, PostController.savePostLike, PostController.updateCount);
router.get('/api/liked/posts', AuthController.ensureSignedIn, PostController.likedPosts);

/*Post Details*/
router.get('/api/post/details/:postId', AuthController.ensureSignedIn, PostController.postDetails);

/*Comment*/
router.post('/api/posts/:postId/comment/create', AuthController.ensureSignedIn, CommentController.saveComment);
router.get('/api/posts/:postId/comments', AuthController.ensureSignedIn, CommentController.showComments);

/*Email Check*/
router.post('/api/check/exist/email', UserController.checkExistingEmail);


module.exports = router;
