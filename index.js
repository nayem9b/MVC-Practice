const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = process.env.PORT || 5000;
const products_routes = require("./Routes/Products");
mongoose
  .connect("mongodb://localhost:27017/nayemapi")
  .then(() => console.log("Connection Successful"))
  .then((err) => console.log(err));
// Middlewere
app.use(cors());
app.use("/api/products", products_routes);
app.get("/", (req, res) => {
  res.send("Home Route is live");
});
const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`App is running on ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
