require('./envs');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const expressValidator = require('express-validator');
const { json, urlencoded } = require('body-parser');
const { serve, setup } = require('swagger-ui-express');
const { readdirSync } = require('fs');
const { validatorController, decryptController } = require('./controllers');

const app = express();
const swaggerSpecification = require('./utils/swagger');

app.use(cors());
app.use(morgan('dev'));
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(expressValidator());
app.use(decryptController);
app.use(validatorController);

/**
 * initialize routes
 */
readdirSync('./routes')
    .forEach((file) => {
        if (file === 'index.route.js') {
            return app.use('/', require('./routes/index.route'));
        }

        return app.use(`/${file.replace('.route.js', '')}`, require(`./routes/${file}`));
    });

app.use('/api-docs', serve, setup(swaggerSpecification));

module.exports = app;
