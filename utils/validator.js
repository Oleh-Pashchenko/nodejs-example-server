module.exports = {
    '/user': {
        POST: req => {
            req.assert("username", "username cannot be blank")
                .notEmpty();

            req.assert("username", "USERNAME_START_WITH_ENGLISH_LETTER")
                .matches(/^(?!^[0-9]*$)^[A-Za-z]+((([.]|[-]|[_]|)[a-zA-Z0-9]+)?).*$/);

            req.assert("username", "USERNAME_ONLY_ENGLISH_LETTERS")
                .matches(/(?!^[0-9]*$)^[A-Za-z]+((([.]|[-]|[_]|)[a-zA-Z0-9]+)?)$/);
    
            req.assert("username", "USERNAME_MIN_LENGTH")
                .matches(/^.{6,}$/);
    
            req.assert("username", "USERNAME_MAX_LENGTH")
                .matches(/^.{0,20}$/);

            req.assert("password", "PASSWORD_ENTER_VALID")
                .matches(/^(?=.*?[A-Za-z])(?=.*?[0-9]).+$/);

            req.assert("password", "PASSWORD_MIN_LENGTH")
                .matches(/^.{6,}$/);

            req.assert("password", "PASSWORD_MAX_LENGTH")
                .matches(/^.{0,15}$/);

            req.assert("age", "PASSWORD_MAX_LENGTH")
                .optional({ nullable: true })
                .isInt();

            return req.validationErrors()
        },
    },
};
