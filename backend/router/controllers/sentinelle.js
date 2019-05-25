const express = require("express");
const router = express.Router();
const users = require("../../models/User");

router.route("/signal").get(async (req, res) => {
    const roomId = req.query.id;
    users.findOne({roomId}).then((value) => {
        res.json({
            status: true,
            time: Date.now(),
            req: roomId,
            result: value
        });
    }).catch((error) => {
        res.json({
            status: false,
            result: error
        });
    })

});

module.exports = router;
