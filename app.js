const express = require('express');
const { request } = require('http');
const path = require('path');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));

//custom middleware and EJS Templates in Express
app.use('', (req, res,next)=>{
    req.banana = 'banana';
    next();
});
app.set('view engine', 'ejs')

app.get('/:userQuery',(req, res)=> {
    console.log(request.banana)
    res.render('index', {data:{userQuery: req.params.userQuery,
        searchResults: ['dipo book', 'dipo book2', 'dipo book3'],
    loggedIn : true,
    username: 'Oladipo'}});
})

app.listen(3000);