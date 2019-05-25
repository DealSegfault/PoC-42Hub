const express = require("express");
const router = express.Router();
const users = require("../../models/User");

router.route("/signal").get(async (req, res) => {
    const roomId = req.query.id;
    users.updateOne({
        roomId: roomId
    }, {
            roomExpiration: Date.now().toString(),
            roomState: 'MOVEMENT'
        })
        .then((value) => {
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
        });
});

router.route("/abort").get(async (req, res) => {
    const roomId = req.query.id;
    users.updateOne({
        roomId: roomId
    }, {
            roomExpiration: '',
            roomState: 'RAS'
        })
        .then((value) => {
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
        });
});

module.exports = router;
