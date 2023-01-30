const express = require("express");
const router = express.Router();
const { Users } = require("../models");

router.get("/", async (req, res) => {
  const listOfusers = await Users.findAll();
  res.json(listOfusers);
});

module.exports = router;
