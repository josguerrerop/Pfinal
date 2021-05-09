const { Schema, model } = require('mongoose');

const Prueba = new Schema({
    x: [
        [Number],
        [Number],
        [Number],
        [Number],
        [Number],
        [Number],
        [Number],
        [Number],
        [Number],
        [Number],
    ]
});

module.exports = model("Prueba", Prueba);