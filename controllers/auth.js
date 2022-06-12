exports.getSignup = (req, res, next) => {
  res.render("auth/signup", {
    path: "/signup",
  });
};

exports.postSignup = (req, res, next) => {
  const { fullName, email } = req.body;
  console.log(fullName, email);
};

exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    path: "login",
  });
};

exports.postLogin = (req, res, next) => {};
