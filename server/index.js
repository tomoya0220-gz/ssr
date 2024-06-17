const express = require('express');

const app = express();

app.get('/favicon.ico', (req, res) => res.status(204));

app.get('/', (req, res) => {
  res.send('Hello world');
});

const PORT = 9000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
