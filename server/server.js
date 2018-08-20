//requires
const express = require('express');
const app =  express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');


//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//static files
app.use(express.static('server/public'));

//PG setup
const pg = require('pg');
const Pool = pg.Pool;
const config = {
    database: 'real_estate',
    host: 'localhost',
    port: 5432,
    maxL: 10,
    idleTimeoutMillis: 10000
}; //end of config

const pool = new Pool(config);

pool.on('connect', () => {
    console.log('postgresql connected!');
});

pool.on('error', (error) => {
    console.log('unable to connect to db!', error);
});

app.get('/sale', (req, res) => {
    console.log('in GET-sale');
    const query = 'SELECT * FROM "listings" WHERE "type" = $1;';
    pool.query(query, ['sale']).then((results) => {
        console.log(results);
        res.send(results.rows);
    }).catch((error) => {
        console.log('error in GET-sale', error);
        res.sendStatus(500);
    });
}); //end of GET-sale

//start up server
app.listen(PORT, () => {
    console.log('Server is running on:', PORT);  
});
