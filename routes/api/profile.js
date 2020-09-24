const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const Profile = require("../../models/profile");
const User = require("../../models/User");

router.get("/me", auth, async (req, res) => {
  try {
    const profile = await profile
      .findOne({ user: req.user.id })
      .populate("user", ["name", "avatar"]);

    if (!profile) {
      return res.status(400).json({ msg: "No user found" });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("srever error");
  }
});

module.exports = router;
