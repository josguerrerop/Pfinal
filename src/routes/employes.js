const { Router } = require('express');
const emp = require('../control/employe');

const router = Router();

router.get('/', emp.getAnything);
router.post('/', emp.CreateAnything);
//router.('/', emp.CreateAnything);


module.exports = router;