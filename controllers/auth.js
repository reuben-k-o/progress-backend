exports.getSignup = (req, res, next) => {
  res.render("auth/signup", {
    path: "/signup",
  });
};

exports.postSignup = (req, res, next) => {
  const { username, email } = req.body;
  console.log(username, email);
};

exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    path: "login",
  });
};

exports.postLogin = (req, res, next) => {};
