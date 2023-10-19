const express = require('express');
const app = express();
const router = require('./routes/routes.js');

app.use('/', router);

    app.listen(3000, () => {
        console.log('Server is runnung');
    });



    