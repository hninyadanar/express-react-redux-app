var express = require('express');
var router = express.Router();
var signUpController = require('../api/controllers/SignUpController');
var loginController = require('../api/controllers/LoginController');
var postController = require('../api/controllers/PostController');
var userRepository = require('../api/db/repository/UserRepository');
var postRepository = require('../api/db/repository/PostRepository');
var authController = require('../api/controllers/AuthController');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


/*SignUp*/
router.get('/api/signup', signUpController.showSignUpForm);
router.post('/api/signup', userRepository.createUser);

/*Login*/
router.get('/login', loginController.showLoginForm);
//router.post('/login', loginController.login);

/*Post*/
router.get('/post', postController.showPostForm);
router.post('/api/post/create', postRepository.savePost);
router.get('/api/posts', postRepository.getAllPosts);

/*PostLikes*/
router.post('/api/post/like', authController.ensureSignedIn, postRepository.savePostLike, postRepository.updateCount);
module.exports = router;
