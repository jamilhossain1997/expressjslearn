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


app.get('/contact', (req, res) => {
    res.send("About Route View");
});

app.get('/term',(req,res)=>{
    res.send(
        {
            id:1,
            name:"jamil",
        }
    )
})

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
