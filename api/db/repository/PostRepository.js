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
        const existPostLike = await PostLike.find({ where: postLike });
        if (existPostLike) {
            return existPostLike;
        }
        PostLike.create(postLike);
    },

    async updateCount(postId, count) {
        const post = await Post.findById(postId, {
            include: [{
                model: User,
                required: true
            }]
        }
        );
        return post.increment('like_count', { by: count })
    },

    async likedPosts(options) {
        return PostLike.findAll(options);
    }

}

