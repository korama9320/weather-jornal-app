// Setup empty JS object to act as endpoint for all routes
projectData = {};
const data = [];
// Express to run server and routes

const express = require("express");

// Start up an instance of app

const app = express();
/* Dependencies */
const bodyParser = require("body-parser");

/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");

app.use(cors());
// Initialize the main project folder
app.use(express.static("website"));

const port = 8000;
// Spin up the server
const server = app.listen(port, () => console.log(`port:${port}`));
console.log(data);
// Initialize all route with a callback function

// Post Route

app.post(`/add`, (req, res) => {
  console.log(req.body);
  newEntry = {
    temp: req.body.temp,
    date: req.body.date,
    feel: req.body.feel,
  };
  data.push(newEntry);
  console.log(data);
});
// get route
app.get(`/all`, (req, res) => {
  res.send(data);
  console.log(data);
});
