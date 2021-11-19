const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Joi = require('joi');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({extended:false }));
app.use(bodyParser.json());

app.get('/',(req, res)=> {
    res.sendFile(path.join(__dirname, 'static', 'index.html'))
})

app.post('/',(req, res)=> {
    const schema = Joi.object({
        username : Joi.string().min(5).max(30).trim().required(),
        password : Joi.string().min(5).max(30).trim().required()
        }) 
        .with('username', 'password')

        const username = req.body[0].value;
        const password = req.body[1].value;

    schema.validate({ username: username, password: password });
    try{
        const value = schema.validateAsync({ username, password })
        res.send("Passed validation...you too sabi")
    }
    catch (err) {
        console.log('Failed to validate input ' + err.details[0].message); 
    }
})

app.listen(8000);