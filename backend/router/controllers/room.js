const express = require("express");
const router = express.Router();
const dbRoom = require("../../models/Room");

router.route("/room").post(async (req, res) => {
  let room = new dbRoom(req.body);
  room.save()
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

router.route("/room").get(async (req, res) => {
  dbRoom.find().then((data) => {
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
