var models = require('../db/models');


module.exports = {

    showLoginForm: function (req, res, next) {
        res.render('login');
    }
}