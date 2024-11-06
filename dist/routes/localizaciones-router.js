"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const localizacion_1 = require("../controllers/localizacion");
const router = (0, express_1.Router)();
router.get('/', localizacion_1.getLocalizaciones);
exports.default = router;
