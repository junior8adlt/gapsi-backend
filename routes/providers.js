const Router = require('koa-router');
const {
  getWelcomeMessage,
  getApiVersion,
  getProviders,
  addProvider,
  deleteProvider,
} = require('../controllers/providers');
const router = new Router();

router.get('/welcome', getWelcomeMessage);
router.get('/version', getApiVersion);
router.get('/providers', getProviders);
router.post('/providers', addProvider);
router.delete('/providers/:name', deleteProvider);

module.exports = router;
