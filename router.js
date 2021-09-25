const router = require('express').Router();
const userController = require('./controllers/userController');
const postController = require('./controllers/postController');
const followController = require('./controllers/followController');
router.get('/', userController.homePage);

// User realted routes
router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/user/:username', userController.mustBeLoggedIn,followController.checkFollow, userController.getCounts,userController.viewUserPosts);
router.post('/addFollow/:username', userController.mustBeLoggedIn, followController.create);
router.post('/removeFollow/:username', userController.mustBeLoggedIn, followController.remove);

// Post related routes
router.get('/create-post', userController.mustBeLoggedIn, postController.createPostPage);
router.post('/create-post', userController.mustBeLoggedIn, postController.create);
router.get('/edit-post/:id', userController.mustBeLoggedIn, postController.editPostPage);
router.post('/edit-post/:id', userController.mustBeLoggedIn, postController.edit);
router.post('/post/:id/delete', userController.mustBeLoggedIn, postController.delete);
router.get('/post/:id', userController.mustBeLoggedIn, postController.viewSingle);
module.exports = router;