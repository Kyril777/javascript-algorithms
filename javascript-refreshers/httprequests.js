/* GET Requests. */ 
const express = require('express'); 
const path = require('path');  

const app = express(); 

app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 

app.get('/', (req, res) => { 
    res.send(req.header('user-agent')); 
}) 

app.listen(4000, () => console.log(`Server started on port 4000`)); 

 

/* POST Request to the Header. */ 
const express = require('express'); 
const path = require('path'); 

const app = express(); 

app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 

app.post('/contact', (req, res) => { 
    res.send(req.header('Content-Type')); 
}) 

app.listen(4000, () => console.log(`Server started on port 4000`)); 

 

/* POST Requests. */ 
const express = require('express'); 
const path = require('path'); 
const app = express(); 

app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 
app.post('/contact', (req, res) => { 
    if(!req.body.name) { 
        return res.status(400).send('Name is required'); 
    } 

    // DATABASE STUFF 
    res.status(201).send(`Thank you ${req.body.name}`); 
}); 

app.post('/login', (req, res) => { 
    if(!req.header('x-auth-token')) { 
        return res.status(400).send('No Token') 
    } 

    if(req.header('x-auth-token') !== '123456') { 
        return res.status(401).send('Not authorized'); 
    } 
    res.send('Logged in'); 
}) 

 app.listen(4000, () => console.log(`Server started on port 4000`)); 



/* PUT Request. */ 
const express = require('express'); 
const path = require('path'); 

const app = express(); 

app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 

app.put('/post/:id', (req, res) => { 
    // DATABASE STUFF 
    res.json({ 
        id: req.params.id, 
        title: req.body.title 
    }) 
}) 

app.listen(4000, () => console.log(`Server started on port 4000`)); 



/* DELETE Request. */ 
const express = require('express'); 
const path = require('path'); 
const app = express(); 

app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 

app.delete('/post/:id', (req, res) => { 

    // DATABASE STUFF 
    res.json({ msg: `Post ${req.params.id} deleted` }) 
}) 

app.listen(4000, () => console.log(`Server started on port 4000`)); 
