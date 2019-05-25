const express = require("express");
const router = express.Router();
const dbUser = require("../../models/User");

router.route("/user").post(async (req, res) => {
  let user = new dbUser(req.body);
  user.save()
    .then(response => {
      res.json({
        status: true,
        result: response
      });
    })
    .catch((error) => {
      res.json({
        status: false,
        result: error
      });
    });
});

module.exports = router;
