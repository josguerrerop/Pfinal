const { Router } = require('express');
const emp = require('../control/employe');

const router = Router();


router.get('/', emp.getEmployees);
router.post('/', emp.createEmployee);
//router.get('/:id', emp.getEmployee);
//router.put('/:id', emp.editEmployee);
//router.delete('/:id', emp.deleteEmployee);

module.exports = router;