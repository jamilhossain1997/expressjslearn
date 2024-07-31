
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose").set("debug", true);

const productRouter = require('./routes/productRoute');
const categoryRouter = require('./routes/categoryRouter');


// console.log("base url",process.env.MONGO_URI);
mongoose
  .connect(process.env.MONGO_URI, {
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));


app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}' from ${req.ip}`);
  res.header("Access-Control-Allow-Origin", "*"); // Be more specific in production
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});




app.get('/', (req, res) => {
    res.send("jamil Hossain");
});


app.use(express.json());
app.use('/api', productRouter);
app.use('/api', categoryRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
