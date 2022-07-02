const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const routeTasks = require('./src/routes/tasks');


// Stripe routes
const striperoutes = require('./routes/stripe-route');


// routes
const requests = require('./routes/api/Req');
const applications = require('./routes/api/Application');
const books = require('./routes/api/books');

const users = require('./routes/api/Users');
const Professionals = require('./routes/api/Professionals');

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());

app.use('/api/tasks', routeTasks, (req, res) => res.sendStatus(401));
app.use('/api/books', books);
app.use('/api/users', users);
app.use('/api/professionals', Professionals);
app.use('/api/requests', requests);
app.use('/api/applications', applications);
app.use('/api/stripe', striperoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`listening on ${port}`);
