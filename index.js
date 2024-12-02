// console.log('it is running');
const express = require('express');
const app = express();
const jsxViewEngine = require('jsx-view-engine');
const PORT = 3001

// data
const rooms = require('./data/rooms');
const clients = require('./data/clients');
const projects = require('./data/projects');


app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsx', jsxViewEngine());

app.use(express.static('public'))

// Middleware =============
app.use((req, res, next) => {
    console.log('All routes are working properly if I am running.');
    next();
})

app.use((req, res, next) => {
    console.log(`Request Method: ${req.method}`);
    console.log(`Request URL: ${req.url}`);
  next();
})

app.get('/', (req, res) => {
    res.send('<h1>HomePage!</h1>')
})

app.get('/about', (req, res) => {
    res.send('<p>This route is about the subject of this database.</p>')
})



app.get('/api/rooms', (req, res) => {
    res.json(rooms);
})

app.get('/api/clients', (req, res) => {
    res.json(clients);
})

app.get('/views/newClient', (req, res) => {
    res.render('NewClient');
})

app.get('/api/projects', (req, res) => {
    res.json(projects);
})





app.use((req, res) => {
    console.log('i am only in this middleware if no other routes have sent a response.')
    res.status(404);
    res.json({ error: 'Resource not found'});
})

app.listen(PORT, () => {
    console.log('listening');
})