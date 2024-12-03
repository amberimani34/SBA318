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

// Home page
app.get('/', (req, res) => {
    res.send('<h1>HomePage!</h1>');
});

// About page
app.get('/about', (req, res) => {
    res.send('<p>This route is about the subject of this database.</p>');
});

// API Routes (GET, POST, PUT, DELETE)

// Rooms Routes
app.get('/api/rooms', (req, res) => {
    res.json(rooms); // Fetch and send list of rooms
});

app.post('/api/rooms', (req, res) => {
    rooms.push(req.body); // Add the new room to the data
    res.json(rooms); // Respond with the created room
});

app.put('/api/rooms/:id', (req, res) => {
    if (req.params.id >= 0 && req.params.id < rooms.length) {
        rooms[req.params.id] = req.body;
        res.json(rooms[req.params.id]);
    } else {
        res.send('<p>That is not a valid id</p>')
    }
});

app.delete('/api/rooms/:id', (req, res) => {
    if (req.params.id >= 0 && req.params.id < rooms.length) {
        rooms.splice(req.params.id, 1);
        res.json(rooms[req.params.id])
    } else {
        res.send('<p>That is not a valid id</p>')
    }
});

// Clients Routes
app.get('/api/clients', (req, res) => {
    res.json(clients); // Fetch and send list of clients
});

app.post('/api/clients', (req, res) => {
    clients.push(req.body); // Add the new client to the data
    res.json(clients); // Respond with the created client
});

app.put('/api/clients/:id', (req, res) => {
    if (req.params.id >= 0 && req.params.id < clients.length) {
        clients[req.params.id] = req.body;
        res.json(clients[req.params.id]);
    } else {
        res.send('<p>That is not a valid id</p>')
    }
});

app.delete('/api/clients/:id', (req, res) => {
    if (req.params.id >= 0 && req.params.id < clients.length) {
        clients.splice(req.params.id, 1);
        res.json(clients[req.params.id])
    } else {
        res.send('<p>That is not a valid id</p>')
    }
});

// Projects Routes
app.get('/api/projects', (req, res) => {
    res.json(projects); // Fetch and send list of projects
});

app.post('/api/projects', (req, res) => {
    projects.push(req.body); // Add the new project to the data
    res.json(projects); // Respond with the created project
});

app.put('/api/projects/:id', (req, res) => {
    if (req.params.id >= 0 && req.params.id < projects.length) {
        projects[req.params.id] = req.body;
        res.json(projects[req.params.id]);
    } else {
        res.send('<p>That is not a valid id</p>')
    }
});

app.delete('/api/projects/:id', (req, res) => {
    if (req.params.id >= 0 && req.params.id < projects.length) {
        projects.splice(req.params.id, 1);
        res.json(projects[req.params.id])
    } else {
        res.send('<p>That is not a valid id</p>')
    }
});

// Render New Client Page
app.get('/views/newClient', (req, res) => {
    res.render('NewClient'); // Render a view for creating a new client
});

app.get('/views/home', (req, res) => {
    res.render('Homepage'); // Render a view for creating a new client
});





app.use((req, res) => {
    console.log('i am only in this middleware if no other routes have sent a response.')
    res.status(404);
    res.json({ error: 'Resource not found'});
})

app.listen(PORT, () => {
    console.log('listening');
})