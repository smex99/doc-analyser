const router = require('express-promise-router')();
const passport = require('passport');

require('../passport');

const { validateBody, schemas } = require('../helpers/routeHelpers');
const UsersController = require('../controllers/users');

//Passport Strategies
const passportSignIn = passport.authenticate('local', { session: false});
//const passportJWT = passport.authenticate('jwt', { session: false});

router.route('/signup')
  .post(validateBody(schemas.authSchema), UsersController.signUp);

router.route('/signin')
  .post(validateBody(schemas.authSchema), passportSignIn, UsersController.signIn);

module.exports = router;
