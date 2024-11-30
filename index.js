// console.log('it is running');
const express = require('express');
const app = express();
const PORT = 3001

// data
const bedrooms = require('./data/bedrooms');
const kitchens = require('./data/kitchens');
const livingrooms = require('./data/livingrooms');

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



app.get('/api/bedrooms', (req, res) => {
    res.json(bedrooms);
})

app.get('/api/kitchens', (req, res) => {
    res.json(kitchens);
})

app.get('/api/livingrooms', (req, res) => {
    res.json(livingrooms);
})






app.use((req, res) => {
    console.log('i am only in this middleware if no other routes have sent a response.')
    res.status(404);
    res.json({ error: 'Resource not found'});
})

app.listen(PORT, () => {
    console.log('listening');
})