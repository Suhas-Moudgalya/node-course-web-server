const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

var app = express();

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', ()=>{
    return new Date().getFullYear();
});
hbs.registerHelper('screamIt', (text)=>{
    return text.toUpperCase();
});

app.get('/', (req,res)=>{
    // res.send({
    //     name: 'SMS',
    //     likes: ['Cricket', 'Chess', 'Mindgames']
    // });
    res.render('home.hbs',{
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to express-app home page.'
    });
});

app.get('/about', (req,res)=>{
res.render('about.hbs',{
    pageTitle: 'About Page'
});
});

app.listen(port, ()=>{
    console.log('Server is up on port 3000');
});