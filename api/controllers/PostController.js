var models = require('../db/models');
const PostRepository = require('../db/repository/PostRepository');

module.exports = {

    async savePost(req, res, next) {
        console.log('post controller', { ...req.body });
        const result = await PostRepository.savePost({ ...req.body, user_id: req.user.id, like_count: 0 });
        res.json(result);
    },

    async showAllPosts(req, res, next) {
        const result = await PostRepository.getAllPosts();
        res.json(result);
    },

    async savePostLike(req, res, next) {
        const result = await PostRepository.savePostLike({ ...req.body, user_id: req.user.id });
        res.locals.count = 1;
        if (result) {
            res.locals.count = 0;
        }
        return next();
    },

    async updateCount(req, res, next) {
        const result = await PostRepository.updateCount(req.body.post_id, res.locals.count);
        res.json(result);
    },

    async likedPosts(req, res, next) {
        const result = await PostRepository.likedPosts({
            where: { user_id: req.user.id },
            attributes: ['post_id']
        });
        res.json(result);
    },

    async postDetails(req, res, next) {
        const result = await PostRepository.getPostDetails(req.params.postId);
        res.json(result);
    },
}

