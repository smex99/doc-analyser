const router = require('express-promise-router')();
const passport = require('passport');
// const multer = require('multer');
// const upload = multer({dest: 'uploads/'});

require('../passport');

const { 
	validateBody, 
	validateParam, 
	schemas 
} = require('../helpers/routeHelpers');

const UploadController = require('../controllers/uploads');

// Passport strategies
const passportJWT = passport.authenticate('jwt', { session: false});

router.route('/ocr')
	.post(UploadController.uploadImage);

module.exports = router;