const jsonServer = require('json-server');
const express = require('express');
const path = require('path');

const app = express();
const router = jsonServer.router('db.json');

app.use('/api', router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
