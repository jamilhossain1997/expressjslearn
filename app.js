const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("jamil Hossain");
});

app.get('/about', (req, res) => {
    res.send("About Route View");
});

app.get('/about', (req, res) => {
    res.send("About Route View");
});

app.get('/test', (req, res) => {
    res.send("About Route View");
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
