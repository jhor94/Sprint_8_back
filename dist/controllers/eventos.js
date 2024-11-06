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
exports.updateEvento = exports.postEvento = exports.deleteEvento = exports.getEvento = exports.getEventos = void 0;
const eventos_1 = __importDefault(require("../models/eventos"));
const getEventos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listaEventos = yield eventos_1.default.findAll();
    res.json(listaEventos);
});
exports.getEventos = getEventos;
const getEvento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const evento = yield eventos_1.default.findByPk(id);
    if (evento) {
        res.json(evento);
    }
    else {
        res.status(404).json({ message: `El evento con el id: ${id}no es encontrado` });
    }
});
exports.getEvento = getEvento;
const deleteEvento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const evento = yield eventos_1.default.findByPk(id);
    if (!evento) {
        res.status(404).json({ message: `Error del evento con el id: ${id}` });
    }
    else {
        yield evento.destroy();
        res.json({
            mensagge: `El evento con el id: ${id} ha sido eliminado`
        });
    }
});
exports.deleteEvento = deleteEvento;
const postEvento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield eventos_1.default.create(body);
        res.json({ message: `El evento fue creado con exito` });
    }
    catch (error) {
        res.json({
            message: `Error al crear el evento`,
        });
    }
});
exports.postEvento = postEvento;
const updateEvento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const evento = yield eventos_1.default.findByPk(id);
        if (evento) {
            yield evento.update(body);
            res.json({
                mensaje: `El evento con el id ${id} ha sido actualizado`
            });
        }
        else {
            res.status(404).json({
                message: `Evento no encontrado con el id ${id}`
            });
        }
    }
    catch (error) {
        res.json({
            message: `Error al actualizar el evento`
        });
    }
});
exports.updateEvento = updateEvento;
