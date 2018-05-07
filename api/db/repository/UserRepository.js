var models = require('../models');


module.exports = {
    createUser: function(req, res, next) {
        models.User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        }).then(function (user) {
            res.redirect('/api/login');
        });
    },

    findByEmail(email) {
        return models.User.findOne({
            where: { email: email }
        })

    },

    findById(id) {
        return models.User.findOne(
            { where: { id: id } })
    }


}