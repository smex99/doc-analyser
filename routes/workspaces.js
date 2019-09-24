const router = require('express-promise-router')();
const passport = require('passport');

require('../passport');

const { 
	validateBody, 
	validateParam, 
	schemas 
} = require('../helpers/routeHelpers');

const WorkspaceController = require('../controllers/workspaces');

//Passport Strategies
const passportJWT = passport.authenticate('jwt', { session: false});

router.route('/:workspaceId')
	.get(validateParam(schemas.idSchema), passportJWT, WorkspaceController.getWorkspace)
	.put(validateParam(schemas.idSchema), passportJWT, WorkspaceController.replaceWorkspace)
	.patch(validateParam(schemas.idSchema), passportJWT, WorkspaceController.updateWorkspace);

router.route('/')
	.get(WorkspaceController.Index)
	.post(WorkspaceController.createWorkspace);

module.exports = router;