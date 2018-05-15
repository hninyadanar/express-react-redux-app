const express = require('express');
const router = express.Router();

const UserController = require('../api/controllers/UserController');
const PostController = require('../api/controllers/PostController');
const AuthController = require('../api/controllers/AuthController');


/*SignUp*/
router.post('/api/signup', UserController.saveImageFile, UserController.signUp);
router.get('/api/user/profile', UserController.findImage);

/*Post*/
router.post('/api/post/create', PostController.savePost);
router.get('/api/posts', PostController.showAllPosts);

/*PostLikes*/
router.post('/api/post/like', AuthController.ensureSignedIn, PostController.savePostLike, PostController.updateCount);
router.get('/api/liked/posts', AuthController.ensureSignedIn, PostController.likedPosts);


module.exports = router;
