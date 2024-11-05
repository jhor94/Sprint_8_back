"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePersona = exports.postPersona = exports.deletPersona = exports.getPersona = exports.getPersonas = void 0;
const persona_1 = __importDefault(require("../models/persona"));
const getPersonas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listPersonas = yield persona_1.default.findAll();
    res.json(listPersonas);
});
exports.getPersonas = getPersonas;
const getPersona = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const persona = yield persona_1.default.findByPk(id);
    if (persona) {
        res.json(persona);
    }
    else {
        res.status(404).json({ message: `Persona no encontrada con el id: ${id}` });
    }
});
exports.getPersona = getPersona;
const deletPersona = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const persona = yield persona_1.default.findByPk(id);
    if (!persona) {
        res.status(404).json({ message: `Persona no encontrada con el id: ${id}` });
    }
    else {
        yield persona.destroy(); //con el metodo destroy elimina la persona
        res.json({
            message: `Persona eliminada con el id: ${id}`,
        });
    }
});
exports.deletPersona = deletPersona;
const postPersona = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield persona_1.default.create(body);
        res.json({ msg: "la persona fue agregada con exito", });
    }
    catch (error) {
        console.log(error);
        res.json({
            message: "Error al agregar la persona",
        });
    }
});
exports.postPersona = postPersona;
const updatePersona = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const persona = yield persona_1.default.findByPk(id);
        if (persona) {
            yield persona.update(body);
            res.json({
                message: "Persona actualizada con exito",
            });
        }
        else {
            res.status(404).json({ message: `Persona no encontrada con el id: ${id}` });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            message: "Error al agregar la persona",
        });
    }
});
exports.updatePersona = updatePersona;
