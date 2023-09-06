const { Router } = require('express');
const router = new Router();
const passport = require('passport');

router.post('/register', passport.authenticate('register', { failureRedirect: '/register' }), async (req, res) => {

    return res.json(req.user);

});

router.post('/login', passport.authenticate('login', { failureRedirect: '/login', failureFlash: true }), async (req, res) => {
    return res.json(req.user);
});





module.exports = router;