exports.getContact = (req, res, next) => {
  res.render("main/contact", {
    path: "/contact",
    pageTitle: "Contact Page",
  });
};
