//requires
const express = require('express');
const app =  express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');

//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//static files
app.use(express.static('server/public'));

//start up server
app.listen(PORT, () => {
    console.log('Server is running on:', PORT);  
});
