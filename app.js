const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const tes = require(__dirname + '/config/config.json')[env];
console.log(tes);

const taskRoutes = require('./routes/task');
const authRoutes = require('./routes/auth');

const app = express();
const port = 8001;
app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/task', taskRoutes);
app.use('/auth', authRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

app.listen(8001, () => console.log(`Server run on port ${port}...`));