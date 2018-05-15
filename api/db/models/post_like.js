'use strict';
const sequelize = require('sequelize')

module.exports = function (sequelize, DataTypes) {
    var postLike = sequelize.define('PostLike', {
    }, {
            underscored: true,
            tableName: 'post_likes'
        });

    postLike.associate = function (models) {
        postLike.belongsTo(models.User, { as: 'user' });
        postLike.belongsTo(models.Post, { as: 'post' });
    };
    return postLike;
}