const express = require("express");
const mongoose = require("mongoose");

const app = express();

const mongoDB =
  "mongodb://nitdesign:nit1234@ds263660.mlab.com:63660/twitter-backend";

mongoose.connect(mongoDB, { useNewUrlParser: true });

app.use(express.json());

app.use(require("./routes"));

app.listen(3000, () => {
  console.log(":) Server started on port 3000");
});
