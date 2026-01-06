const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('🍕 ========================================================');
  res.send('🍕 We are now serving PEPPERONI PIZZA! Updated via GitHub!');
});

app.listen(port, () => {
  console.log(`Pizza shop listening on port ${port}`);
});