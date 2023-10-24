const express = require('express');


const app = express();

const dp = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password:'12345678',
        database: 'public',
        port: 5432
    }
})

app.set('db', db);

app.listen(3000, () => console.log('server is running'))

// !!! routelar ve http metodlar tamamlanmayib