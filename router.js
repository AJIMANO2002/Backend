const route = require("express").Router();
const db = require("./schema");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");




route.post("/register", async (req, res) => {
  try {
    let alreadyEmail = await db.findOne({ email: req.body.email }); //dbquery
    if (alreadyEmail) {
      return res.status(400).json("Email exist");
    }
    let passhash = await bcrypt.hash(req.body.password, 10);
    const data = new db({
      name: req.body.name,
      email: req.body.email,
      password: passhash,
      conformpassword: req.body.conformpassword,


    });
    let user = await data.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).send("error");
  }

});

route.post("/login", async (req, res) => {
  try {
    let user = await db.findOne({ email: req.body.email }); //dbquery

    if (!user) {
      return res.status(400).json("Wrong credentials!");
    }

    let passwordValidation = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!passwordValidation) {
      return res.status(400).json("Your Password Wrong!");
    }

    let accessToken = jwt.sign({ email: user.email }, "SecretKey");


    res.header("auth", accessToken).send(accessToken);
  } catch (err) {
    res.status(500).send("Wrong credentials...!");
  }
});









module.exports = route;