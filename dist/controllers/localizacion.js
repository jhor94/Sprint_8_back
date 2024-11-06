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
exports.updateLocalizacion = exports.postLocalizacion = exports.deleteLocalizacion = exports.getLocalizacion = exports.getLocalizaciones = void 0;
const localizacion_1 = __importDefault(require("../models/localizacion"));
const getLocalizaciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listaLocalizaciones = yield localizacion_1.default.findAll();
    res.json(listaLocalizaciones);
});
exports.getLocalizaciones = getLocalizaciones;
const getLocalizacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const localizacion = yield localizacion_1.default.findByPk(id);
    if (localizacion) {
        res.json(localizacion);
    }
    else {
        res.status(404).json({ message: `Localizacion con el id: ${id}no encontrada` });
    }
});
exports.getLocalizacion = getLocalizacion;
const deleteLocalizacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const localizacion = yield localizacion_1.default.findByPk(id);
    if (!localizacion) {
        res.status(404).json({ message: `Localizacion con el id: ${id}` });
    }
    else {
        yield localizacion.destroy();
        res.json({
            mensagge: `Localizacion con el id: ${id} ha sido eliminada`
        });
    }
});
exports.deleteLocalizacion = deleteLocalizacion;
const postLocalizacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield localizacion_1.default.create(body);
        res.json({ message: `la localizacion fue creada con exito` });
    }
    catch (error) {
        res.json({
            message: `Error al crear la localizacion`,
        });
    }
});
exports.postLocalizacion = postLocalizacion;
const updateLocalizacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const localizacion = yield localizacion_1.default.findByPk(id);
        if (localizacion) {
            yield localizacion.update(body);
            res.json({
                mensaje: `la localizacion con el id ${id} ha sido actualizada`
            });
        }
        else {
            res.status(404).json({
                message: `Localizacion no encontrada con el id ${id}`
            });
        }
    }
    catch (error) {
        res.json({
            message: `Error al actualizar la localizacion`
        });
    }
});
exports.updateLocalizacion = updateLocalizacion;
