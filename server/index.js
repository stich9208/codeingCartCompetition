const express = require("express");
const app = express();
const port = 3000;
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

mongoose
  .connect(
    "mongodb+srv://j2w:cjswo12@nodereactbasic.26ntd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("mongo DB connected!"))
  .catch((err) => console.log("error!", err));

app.get("/", (req, res) => {
  res.send("Hello World!!!!!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
