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
    //console.log(newOne);
    await newOne.save();
    res.send({ message: 'Employee Created' });
}

employe.getEmployee = (req, res) => {

}

employe.editEmployee = (req, res) => {

}

employe.deleteEmployee = (req, res) => {

}

module.exports = employe;