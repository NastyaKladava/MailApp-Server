const express = require("express");
const router = express.Router();
const { Mails } = require("../models");

router.get("/", async (req, res) => {});

router.get("/:userId", async (req, res) => {
  const userId = req.params.userId;
  const mails = await Mails.findAll({
    where: { UserId: userId },
  });
  res.json(mails);
});

router.post("/", async (req, res) => {
  const mail = req.body;
  await Mails.create(mail);
  res.json(mail);
});

module.exports = router;
