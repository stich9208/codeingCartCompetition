const express = require("express");
const app = express();
const port = 3000;
const { User } = require("./models/User");
const config = require("./config/key.js");
const cookieParser = require("cookie-parser");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const mongoose = require("mongoose");
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
  res.send("Hello World!!!!!");
});

app.post("/register", (req, res) => {
  const user = new User(req.body);

  //mongoDB의 메서드
  user.save((err, doc) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.status(200).json({
      success: true,
    });
  });
});

app.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    console.log(user);
    //입력한 이메일에 해당하는 유저가 데이터베이스에 없을 경우
    !user
      ? res.json({
          loginSuccess: false,
          message: "이메일에 해당하는 유저가 존재하지 않습니다.",
          //입력한 이메일에 해당하는 유저가 데이터베이스에 있을 경우 비밀번호가 일치하는지 확인한다. comparePassword => User.js에서 생성한 메소드
        })
      : user.comparePassword(req.body.password, (err, isMatch) => {
          //비밀번호가 일치하지 않을 경우 로그인 실패 , 일치할 경우 토큰을 생성하여 유저 정보에 저장하고 유저의 로컬db(쿠키, 로컬스토리지등)에도 저장한다.
          //generateToken => User.js에서 생성한 메소드
          !isMatch
            ? res.json({
                loginSuccess: false,
                message: "비밀번호가 틀렸습니다.",
              })
            : user.generateToken((err, user) => {
                err
                  ? res.status(400).send(err)
                  : res
                      .cookie(user.name, user.token)
                      .status(200)
                      .json({ loginSuccess: true, userId: user._id });
              });
        });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
