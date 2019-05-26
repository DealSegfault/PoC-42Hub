const express = require("express");
const router = express.Router();
const room = require("../../models/Room");
const axios = require("axios");

router.route("/signal").get(async (req, res) => {
    const roomId = "1"//req.query.id;
    const timestamp = Date.now().toString();
    await room.updateOne({
        roomId: roomId
    }, {
            roomExpiration: timestamp,
            alertState: 'MOVEMENT'
        })
        .then((value) => {
            res.json({
                status: true,
                time: timestamp,
                req: roomId,
                result: value
            });
        }).catch((error) => {
            res.json({
                status: false,
                result: error
            });
        }); 
    setTimeout(() => {
        room.findOne({
            roomId: roomId
        }).then((data) => {
            console.log(timestamp, data.roomExpiration)
            if (data.alertState == 'MOVEMENT' && timestamp == data.roomExpiration) {
                axios.get('http://localhost:7777/api/alert');
            }
        }).catch((error) => {
            return null
        });
    }, 62000)
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
