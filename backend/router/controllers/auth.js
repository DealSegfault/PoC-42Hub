const passport = require('passport')
const express = require("express");
const router = express.Router();

router.route('/login/42/').get(
    passport.authenticate('42')
)

router.route('/login/42/return').get( (req, res) => {

    // passport.authenticate('42', {
        //         failureRedirect: '/login'
        //     }),
        // function    
        // (req, res) => {
            // res.json({
            //     status: false,
            //     result: req.query.code
            // });
            res.redirect('http://localhost:3000/token/' + req.query.code);
            // }
        }
)


router.route('/logout').get((res, req) => {
    req.logout();
  res.redirect('/');
})

module.exports = router;