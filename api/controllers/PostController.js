var models = require('../db/models');
const PostRepository = require('../db/repository/PostRepository');

module.exports = {

    async savePost(req, res, next) {

        const result = await PostRepository.savePost({ ...req.body, user_id: req.user.id, like_count: 0 });
        res.json(result);
    },

    async showAllPosts(req, res, next) {
        const result = await PostRepository.getAllPosts();
        res.json(result);
    },

    async savePostLike(req, res, next) {
       PostRepository.savePostLike({ ...req.body, user_id: req.user.id });
        return next();
    },

    async updateCount(req, res, next) {
        const result = await PostRepository.updateCount(req.body.post_id);
        res.json(result);
    }
}

