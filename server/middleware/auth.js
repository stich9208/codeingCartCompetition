const { User } = require("../models/User");

let auth = (req, res, next) => {
  //쿠키에서 토큰정보 확인
  // 토큰 복호화 후 DB에서 유저 확인
  //결과 전달
  let token = req.cookes.auth_jwt;
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user) return res.json({ isAuth: false, error: true });
    req.token = token;
    req.user = user;
    next();
  });
};

module.exports = { auth };
