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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const personas_router_1 = __importDefault(require("../routes/personas-router"));
//import baseDatos from "../db/connectiondb";// kitar para conectar bd con squelize
const database_1 = require("../db/database");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares(); // siempre colocarlo antes de los routes
        this.routes();
        //this.basedatosConnect()
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor rodando en el port ${this.port}`);
        });
    }
    routes() {
        this.app.get('/', (req, res) => {
            res.json({
                name: "api working",
                description: "api working"
            });
        });
        this.app.get('/api/personas', (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield (0, database_1.getConnetion)();
                const result = yield connection.query("SELECT * FROM persona");
                res.json(result);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Error en la base de datos' });
            }
        }));
        // ira la ruta
        this.app.use('/api/personas', personas_router_1.default);
    }
    midlewares() {
        this.app.use((0, cors_1.default)({ origin: 'http://localhost:4200' }));
        this.app.use(express_1.default.json());
    }
}
exports.default = Server;
