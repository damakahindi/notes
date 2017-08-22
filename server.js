const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const notes = require('./server/routes/friend');

// Initializing the express app
const app = express();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors);

// Set up the port
const port = process.env.PORT || 3000;

// connect to our database
mongoose.connect('mongodb://dama:dama@ds145283.mlab.com:45283/friend', {
  useMongoClient: true,
}).then(
  () => { console.info('Connected to database'); },
  (err) => { console.info('Failed to connect to database', err); },
);

app.use('/api', notes);


app.listen(port, () => {
  console.info('==> 🌎 Listening on port %s. Open up http://127.0.0.1:%s/ ', port, port);
  console.info('==> 🌎 API port %s. Open up http://127.0.0.1:%s/api ', port, port);
});
