'use strict';
const sequelize = require('sequelize')
module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            notEmpty: true
        },
        gender: {
            type: DataTypes.STRING,
            notEmpty: true
        },
        birthday: {
            type: DataTypes.DATEONLY,
            notEmpty: true
        },
        image: {
            type: DataTypes.STRING,
            notEmpty: true
        }
    }, {
            underscored: true,
            tableName: 'users'
        });

    return User;
};