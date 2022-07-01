const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const routeTasks = require('./src/routes/tasks');
const requests = require('./routes/api/Req');

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());

app.use('/api/tasks', routeTasks, (req, res) => res.sendStatus(401));
app.use('/api/requests', requests);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`listening on ${port}`);
