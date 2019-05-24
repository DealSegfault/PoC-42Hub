const express = require("express");
const router = express.Router();

router.route("/user").post(async (req, res) => {
  // Get All Comments
  const userMock = {
    name: 'robert',
    age: '21',
    orientation: 'MF',
    city: 'Melun'
}


  console.log(result)
  res.json({
    status: true,
    result: userMock
  });
});

module.exports = router;
