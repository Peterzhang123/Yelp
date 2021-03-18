const express = require("express");
const path = require("path");
const api_route = require('./route/index');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use(api_route);

app.use(express.static(path.resolve(__dirname, 'client')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
})


app.listen(PORT, () => {
  console.log("listen on port : ", PORT);
});