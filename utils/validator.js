module.exports = {
    '/': {
        GET: req => req.validationErrors(),
    },
    '/test': {
        GET: req => req.validationErrors(),
    },
};
