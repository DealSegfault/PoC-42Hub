const express = require("express");
const router = express.Router();
const room = require("../../models/Room");

router.route("/signal").get(async (req, res) => {
    const roomId = "1"//req.query.id;
    room.updateOne({
        roomId: roomId 
    }, {
            roomExpiration: Date.now().toString(),
            alertState: 'MOVEMENT'
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
    const roomId = "1" //req.query.id;
    room.updateOne({
        roomId: roomId
    }, {
            roomExpiration: '',
            alertState: 'RAS'
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


router.route("/alert").get(async (req, res) => {
    const roomId = "1" //req.query.id;
    room.updateOne({
        roomId: roomId
    }, {
            roomExpiration: '',
            alertState: 'ALERT'
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
