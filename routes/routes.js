const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Irfandi Web - Homepage" });
});

router.get("/about", (req, res) => {
  res.render("about", { title: "Irfandi Web - About Me" });
});

router.get("/contact", (req, res) => {
  res.render("contact", { title: "Irfandi Web - Contact Me" });
});

module.exports = router;
