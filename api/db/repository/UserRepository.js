var models = require('../models');
const User = models.User;


module.exports = {
    async createUser(user) {
        User.create(user);
    },

    async findByEmail(email) {
        return User.findOne({
            where: { email: email }
        })
    },

    async findById(id) {
        return User.findOne(
            { where: { id: id } })
    }


}