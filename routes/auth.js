var authController = require('../controllers/authController.js');
 
module.exports = function(app, passport) {
    app.get('/signup', authController.signup);
    app.get('/signin', authController.signin);
    app.get('/home', isLoggedIn, authController.home);
    app.get('/create', isLoggedIn, authController.create);
    app.get('/update/:id', isLoggedIn, authController.update);
    app.get('/events/:id', isLoggedIn, authController.oneEvent);
    app.get('/update_event/:id', isLoggedIn, authController.updateOneEvent);

    app.get('/logout', authController.logout);

    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/home',
            failureRedirect: '/signup'
        }
    ));

    app.delete('/events/:id', isLoggedIn, authController.delete);
    


    app.post('/signin', passport.authenticate('local-signin', {
            successRedirect: '/home',
            failureRedirect: '/signin'
        }
    ));

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/signin');
    }
}