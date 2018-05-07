var models = require('../db/models');

module.exports = {
    showPostForm: function (req, res, next) {
        res.render('post');
    }
}

