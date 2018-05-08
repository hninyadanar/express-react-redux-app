var models = require('../db/models');
const UserRepository = require('../db/repository/UserRepository');

module.exports = {

    async signUp(req, res, next) {
        UserRepository.createUser({ ...req.body });
        res.json("success");
    }
}

