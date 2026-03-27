const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: "DevOps Project 2 Running 🚀" });
});

app.get('/health', (req, res) => {
  res.json({ status: "OK" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
// test deploy
