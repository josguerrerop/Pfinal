const employe = {}
const Employee = require('../models/employe')

employe.getEmployees = async(req, res) => {
    try {
        const employes = await Employee.find();
        res.json(employes);
    } catch (error) {
        console.error(error);
    }
}

employe.createEmployee = async(req, res) => {
    const newOne = new Employee(req.body);
    await newOne.save();
    res.send({ message: 'Employee Created' });
}

employe.getEmployee = async(req, res) => {
    console.log(req.params);
    const employe = await Employee.findById(req.params.id);
    res.send(employe);
}

employe.editEmployee = async(req, res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body)
    res.json({ status: 'Employee Updated' })
}

employe.deleteEmployee = async(req, res) => {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ status: 'Employe Delete' });
}

module.exports = employe;