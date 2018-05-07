'use strict';

module.exports = function (sequelize, DataTypes) {
    const Post = sequelize.define('Post', {
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        like_count: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {
            underscored: true,
            tableName: 'posts'
        });

    Post.associate = function (models) {
        Post.belongsTo(models.User, {
            foreignKey: 'user_id',
        });
    };

    return Post;
};
