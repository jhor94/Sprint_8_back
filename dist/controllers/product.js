"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = exports.postProduct = exports.deletProduct = exports.getProduct = exports.getProducts = void 0;
const getProducts = (req, res) => {
    res.json({
        msg: "ola productos"
    });
};
exports.getProducts = getProducts;
const getProduct = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "ola productos",
        id
    });
};
exports.getProduct = getProduct;
const deletProduct = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "delet productos",
        id
    });
};
exports.deletProduct = deletProduct;
const postProduct = (req, res) => {
    const { body } = req;
    res.json({
        msg: "post productos",
        body
    });
};
exports.postProduct = postProduct;
const updateProduct = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    res.json({
        msg: "update productos",
        id,
        body
    });
};
exports.updateProduct = updateProduct;
