var models = require('../models');
var User = models.User;

module.exports = {
    savePost: function (req, res, next) {
        models.Post
            .create({
                content: req.body.content,
                user_id: req.user.id,
                like_count: 0
            })
            .then(post => {
                return models.Post.findOne({
                    where: {id: post.id},
                    include: [{model: User}]
                })
            })
            .then(post => {
                res.json(post);
            })
    },

    updateCount: function (req, res, next) {
        models.Post.findById(req.body.post_id, {
            include: [{
                model: User,
                required: true
            }]
        }
        ).then(post => {
            return post.increment('like_count', { by: 1 })
        })
            .then(post => {
                res.json(post);
            })
    },

    getAllPosts(req, res, next) {
        models.Post.findAll({
            include: [{
                model: User,
                required: true
            }]
        }).then(posts => {
            res.json(posts);
        });
    },

    savePostLike: function (req, res, next) {
        models.PostLike.create({ ...req.body, user_id: req.user.id }).then(function (postlike) {
            return next();
        });
    }

}

