const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    usuario: { type: String, required: true },
    password: { type: String, required: true },
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
});

const usuarioModel = mongoose.model('Usuario', usuarioSchema, 'usuarios');
module.exports = usuarioModel;