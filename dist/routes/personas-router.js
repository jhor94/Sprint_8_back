"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const personas_1 = require("../controllers/personas");
const router = (0, express_1.Router)();
router.get('/', personas_1.getPersonas);
router.get('/:id', personas_1.getPersona);
router.delete('/:id', personas_1.deletPersona);
router.post('/', personas_1.postPersona);
router.put('/:id', personas_1.updatePersona);
exports.default = router;