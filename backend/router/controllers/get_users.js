const express = require("express");
const router = express.Router();
const dbUser = require("../../models/User");

router.route("/user").get(async (req, res) => {
    dbUser.find().then((data) => {
        res.json({
            status: true,
            result: data
        });
    }).catch((error) => {
        res.json({
            status: false,
            result: error
        });
    });
});

module.exports = router;
