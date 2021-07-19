const { Schema, model } = require('mongoose');

const Operador = new Schema({
    email: { type: String, required: true }
});