const express = require('express');
const app = express();


//middlewre
app.use(express.json());

//routes
app.use(require('./routes/routes'));


app.listen(3000, function () {
  console.log('Esta app corre en el puerto 3000!');
});