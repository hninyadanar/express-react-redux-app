var models = require('../db/models');

module.exports = {
    showSignUpForm: function (req, res, next) {
        res.render('signup');
    } 
}

