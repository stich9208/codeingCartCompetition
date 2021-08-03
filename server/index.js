const express = require("express");
const app = express();
const port = 3000;
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const { User } = require("./models/User");

const config = require("./config/key");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("mongo DB connected!"))
  .catch((err) => console.log("error!", err));

app.get("/", (req, res) => {
  res.send("Hello!!!");
});

app.post("/register", (req, res) => {
  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
