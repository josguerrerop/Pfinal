const employe = {}
const Operador = require('../models/operador')
const fs = require('fs');
//Prueba.deleteMany().exec();


employe.getEmployees = async(req, res) => {
    console.log(req.body)
    res.json({status:200})
}
/*
    let x = {
    email: 'josguerrerop@correo.udistrital.edu.co'
}
const operador = new Operador({x});

const employee = await Employee.findByOne({email:req.body.email},(err,user)=>{
    if(err){
console.log(err)
    }
    if(user){
       res.json({success:true, status:200})
    }else{
        res.json({success:false, status:404})
    }
});
*/
//}






    /*
    try {
        const k = './matpower7.1/pruebas/JSON/Documento2.json'
        const data = fs.readFileSync(k, { encoding: 'utf8', flag: 'r' });
        x = JSON.parse(data);
        await new Prueba({ x }).save();
        const employes = await Prueba.find();
        res.json(employes);
    } catch (error) {
        console.error(error);
    }
    */


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