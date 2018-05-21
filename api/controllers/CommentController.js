
var models = require('../db/models');
const CommentRepository = require('../db/repository/CommentRepository');

module.exports = {

    async saveComment(req, res, next) {
        const result = await CommentRepository.saveComment({ ...req.body, post_id: req.params.postId, user_id: req.user.id });
        console.log("result", result);
        res.json(result);
    },

    async showComments(req, res, next) {
        const result = await CommentRepository.getAllComments(req.params.postId);
        console.log('************ comments **************', JSON.stringify(result));
        res.json(result);
    }
}