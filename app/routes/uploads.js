const router = require('express-promise-router')();

const UploadController = require('../controllers/uploads');

router.route('/ocr').post(UploadController.uploadImage);

module.exports = router;
