var models = require('../models');
const User = models.User;
const Post = models.Post;
const PostLike = models.PostLike;

module.exports = {

    async savePost(post) {
        const createdPost = await Post.create(post);
        return Post.findOne({
            where: { id: createdPost.id },
            include: [{ model: User }]
        });
    },

    async getAllPosts() {
        return Post.findAll({
            include: [{
                model: User,
                required: true
            }]
        })
    },

    async savePostLike(postLike) {
        PostLike.create(postLike);
    },

    async updateCount(postId) {
        const post = await Post.findById(postId, {
            include: [{
                model: User,
                required: true
            }]
        }
        );
        return post.increment('like_count', { by: 1 })
    },

}

