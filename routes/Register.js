const express = require("express");
const router = express.Router();
const { Users } = require("../models");

router.post("/", async (req, res) => {
  const { username } = req.body;

  const user = await Users.findOne({
    where: { username: username },
  });

  if (!user) {
    await Users.create({
      username: username,
    });
  }

  const regUser = await Users.findOne({
    where: { username: username },
  });

  res.json(regUser);
});

module.exports = router;
