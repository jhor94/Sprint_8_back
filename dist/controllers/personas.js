"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePersona = exports.postPersona = exports.deletPersona = exports.getPersona = exports.getPersonas = void 0;
const getPersonas = (req, res) => {
    res.json({
        msg: "ola Personas"
    });
};
exports.getPersonas = getPersonas;
const getPersona = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "ola Personas",
        id
    });
};
exports.getPersona = getPersona;
const deletPersona = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "delet Personas",
        id
    });
};
exports.deletPersona = deletPersona;
const postPersona = (req, res) => {
    const { body } = req;
    res.json({
        msg: "post Personas",
        body
    });
};
exports.postPersona = postPersona;
const updatePersona = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    res.json({
        msg: "update Personas",
        id,
        body
    });
};
exports.updatePersona = updatePersona;
