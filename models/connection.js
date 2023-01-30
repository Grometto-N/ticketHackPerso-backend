const mongoose = require('mongoose');
const connectionString = process.env.CONNECTION_STRING;

console.log(process.env.CONNECTION_STRING)

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));