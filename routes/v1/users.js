const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { User } = require("../../models");

/* GET users listing. */
router.get("/", async (req, res, next) => {
  let users = await User.findAll();
  res.send(users);
});

// Create User
router.post("/register", async (req, res, next) => {
  // hashing the password provided by the user with bcrypt
  const hash = bcrypt.hashSync(req.body.password, 10);
  if (req.body.username && req.body.email && req.body.password)
    try {
      // create a new user with the password hash from bcrypt
      // Before create can validate if user exist
      let user = await User.create(
        Object.assign(req.body, {
          username: req.body.username,
          email: req.body.email,
          password: hash
        })
      );

      return res.json(user);
    } catch (err) {
      return res.status(400).send(err);
    }
  else return res.status(400).send("Missing params");
});

// get, Update or delete user by ID
router
  .get("/:userId", async (req, res, next) => {
    let user = await User.findAll({ where: { id: req.params.userId } });
    res.json(user);
  })
  .put("/:userId/username/:username", async (req, res, next) => {
    try {
      var result = await User.find({ where: { id: req.params.userId } });
    } catch (err) {
      res.status(400).send("Error can not upate record : ", err);
    }
    if (result) {
      try {
        {
          let newUserRecord = await result.update(
            {
              username: req.params.username
            },
            { where: { id: req.params.userId } }
          );
          res.status(400).json(newUserRecord);
        }
      } catch (err) {
        res.status(400).json("Error can not upate record : ", err);
      }
    } else res.status(400).json("user not found");
  });
// .delete()

module.exports = router;
