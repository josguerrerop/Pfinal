const { Router } = require('express');
const emp = require('../control/employe');

const router = Router();


router.get('/', emp.getEmployees);
router.post('/', emp.createEmployee);
router.get('/:id', emp.getEmployee);
router.get('/:id', emp.editEmployee);
router.get('/:id', emp.deleteEmployee);

module.exports = router;