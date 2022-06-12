exports.getSignup = (req, res, next) => {
  res.render("auth/signup", {
    path: "/signup",
  });
};

exports.postSignup = (req, res, next) => {};

exports.getLogin = (req, res, next) => {};

exports.postLogin = (req, res, next) => {};
