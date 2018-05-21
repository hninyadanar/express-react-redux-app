var models = require('../models');
const Comment = models.Comment;
const User = models.User;

module.exports = {

    async saveComment(comment) {
        const createdComment = await Comment.create(comment);
        return Comment.findOne({
            where: { id: createdComment.id },
            include: [{ model: User }]
        });
    },

    async getAllComments(postId) {
        return Comment.findAll(
            {
                where: { post_id: postId },
                include: [{
                    model: User,
                    required: true
                }]
            }
        );
    }


}