const validator = require('../utils/validator');

module.exports = (req, res, next) => {
    const { method, path } = req;
    const validatorPath = validator[path];
    if (validatorPath) {
        const validatorMethod = validatorPath[method];
        if (validatorMethod) {
            const errors = validatorMethod(req);
            if (errors) {
                return res.status(400).send(errors[0]);
            }
        }
    }

    return next();
};
