module.exports = {
    ensureSignedIn(req, res, next) {
        if (req.user) {
            return next();
        }
        res.status(401).json({ message: 'Please Login', user: req.user });
    },
};