const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/sale', (req, res) => {
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

router.get('/rent', (req, res) => {
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

router.delete('/delete/:id', (req, res) => {
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

router.post('/addHome', (req, res) => {
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

module.exports = router;