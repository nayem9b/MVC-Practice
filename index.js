const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
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
