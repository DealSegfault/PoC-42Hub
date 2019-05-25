const passport = require('passport')
const express = require("express");
const router = express.Router();

router.route('/login').get(async (res, req) => {res.render('login')})
router.route('/login/42').get(async (res, req) => {
    console.log("ee")
    passport.authenticate('42')})

router.route('/login/42/return').get(async (res, req) => {
    passport.authenticate('42', {
            failureRedirect: '/login'
        }),
        function (req, res) {
            res.redirect('/');
        }
})

module.exports = router;