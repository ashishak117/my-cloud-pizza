const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('🍕 Welcome to my Cloud Pizza Shop! Open for business!');
});

app.listen(port, () => {
  console.log(`Pizza shop listening on port ${port}`);
});