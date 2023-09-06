const { Router } = require('express');
const router = new Router();
const passport = require('passport');

router.post('/register', passport.authenticate('register', { failureRedirect: '/register' }), async (req, res) => {

    return res.redirect('/api/sessions/current');

});

router.post('/login', passport.authenticate('login', { failureRedirect: '/login', failureFlash: true }), async (req, res) => {
    return res.redirect('/api/sessions/current');
});

router.get('/current', (req, res) => {
    return res.json({
        user: req.user,
        session: req.session
    })
})





module.exports = router;