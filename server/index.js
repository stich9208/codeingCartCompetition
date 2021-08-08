const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

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

app.post("/login", (req, res) => {
  //findOne => mongoDB 메서드
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "유저를 찾을 수 없습니다.",
      });
    }
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          loginSuccess: false,
          message: "비밀번호가 틀렸습니다.",
        });
      user.generateToken((err, user) => {
        err
          ? res.status(400).send(err)
          : res
              .cookie("jwt", user.token)
              .status(200)
              .json({ loginSeccess: true, message: "로그인 되었습니다!" });
      });
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
