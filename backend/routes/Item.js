const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const itemCtrl = require('../Controllers/Item')

router.post('/addItem',auth, itemCtrl.addItem);
router.get('/fetchItem', auth,itemCtrl.fetchItem);
module.exports = router;