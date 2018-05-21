'user strict';
const sequelize = require('sequelize')

module.exports = function (sequelize, DataTypes) {
    var Comment = sequelize.define('Comment', {
        comment: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
            underscored: true,
            tableName: 'comments'
        });

    Comment.associate = function (models) {
        Comment.belongsTo(models.User, { foreignKey: 'user_id' });
        Comment.belongsTo(models.Post, { foreignKey: 'post_id' });
    };
    return Comment;
}