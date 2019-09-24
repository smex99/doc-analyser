const router = require('express-promise-router')();
const passport = require('passport');

require('../passport');

const { 
	validateBody, 
	validateParam, 
	schemas 
} = require('../helpers/routeHelpers');

const InvoiceController = require('../controllers/invoices');

// Passport strategies
const passportJWT = passport.authenticate('jwt', { session: false});

router.route('/:invoiceId')
	.get(validateParam(schemas.idSchema), passportJWT, InvoiceController.getInvoice)
	.put(validateParam(schemas.idSchema), passportJWT, InvoiceController.replaceInvoice)
	.patch(validateParam(schemas.idSchema), passportJWT, InvoiceController.updateInvoice);

router.route('/')
	.get(InvoiceController.Index);

module.exports = router;