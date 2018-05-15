const multer = require('multer');
var models = require('../db/models');
const UserRepository = require('../db/repository/UserRepository');
var path = require('path');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '_' + file.originalname);
    }
});

var multerUpload = multer({ storage: storage });
const upload = multerUpload.single('file');
var imageFolder = path.join(__dirname, '../../', 'uploads/');

module.exports = {

    async saveImageFile(req, res, next) {
        upload(req, res, err => {
            console.log('upload image');
            console.log(req.file);
            if (err) {
                console.log('error occured');
                console.log(JSON.stringify(err));
            }
            else {
                next();
            }
        });
    },

    async signUp(req, res, next) {
        const imagePath = { image: `${imageFolder}${req.file.filename}` };
        UserRepository.createUser({ ...imagePath, ...req.body });
        res.json("success");
    },

    async findImage(req, res, next) {
        const result = await UserRepository.findById(req.user.id);
        if (result) {
            console.log('image found');
        }
        console.log('---- image -----', result.image);
        res.sendFile(result.image);
    }
}

