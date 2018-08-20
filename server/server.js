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
    const query = 'SELECT * FROM "listings" WHERE "type" = $1 ORDER BY "cost" ASC;';
    pool.query(query, ['sale']).then((results) => {
        console.log(results);
        res.send(results.rows);
    }).catch((error) => {
        console.log('error in GET-sale', error);
        res.sendStatus(500);
    });
}); //end of GET-sale

app.get('/rent', (req, res) => {
    console.log('in GET-rent');
    const query = 'SELECT * FROM "listings" WHERE "type" = $1 ORDER BY "cost" ASC;';
    pool.query(query, ['rent']).then((results) => {
        console.log(results);
        res.send(results.rows);
    }).catch((error) => {
        console.log('error in GET-sale', error);
        res.sendStatus(500);
    });
}); //end of GET-sale

app.delete('/delete/:id', (req, res) => {
    console.log(req.params.id);
    const idToDelete = req.params.id;
    const query = `DELETE FROM "listings" WHERE "id" = $1;`;
    pool.query(query, [idToDelete]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error in DELETE', error);
        res.sendStatus(500);
    })
}); //end of delete

app.post('/addHome', (req, res) => {
    console.log('in POST route', req.body);
    const updatedList = req.body;
    const query = 'INSERT INTO "listings" ("cost", "sqft", "type", "city", "image_path") VALUES ($1, $2, $3, $4, $5);';
    pool.query(query, [updatedList.cost, updatedList.sqft, updatedList.type, updatedList.city, updatedList.image_path]).then((results) => {
        console.log(results);
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error updating', error);
        res.sendStatus(500);
    });
}); //end of put

//start up server
app.listen(PORT, () => {
    console.log('Server is running on:', PORT);  
}); //end of listen







