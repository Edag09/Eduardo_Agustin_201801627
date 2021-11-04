const express = require('express');
const app = express(),
  bodyParser = require("body-parser");
port = 3080;
let cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const parser = require('./analizador')
require('./routes/compile.js')(parser, app)
require('./routes/ast.js')(parser, app)

app.get('/', (req, res) => {
  res.send('Hello from server!');
});

app.listen(port, () => {
  console.log(`Server listening on the port: ${port}`);
});