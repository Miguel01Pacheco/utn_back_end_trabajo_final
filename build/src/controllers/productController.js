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
exports.deleteProduct = exports.updateProduct = exports.addProduct = exports.getProductById = exports.getAllProducts = void 0;
const productModel_1 = __importDefault(require("../models/productModel"));
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield productModel_1.default.getAllProducts();
        res.json(products);
    }
    catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
});
exports.getAllProducts = getAllProducts;
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const product = yield productModel_1.default.getProductById(id);
        res.json(product);
    }
    catch (error) {
        res.status(404).json({ status: 404, error: error.message });
    }
});
exports.getProductById = getProductById;
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, price, stock } = req.body;
    const productBody = { name, description, price, stock };
    try {
        const newProduct = yield productModel_1.default.addProduct(productBody);
        res.status(201).json(newProduct);
    }
    catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
});
exports.addProduct = addProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name, description, price, stock } = req.body;
        const updatedProduct = yield productModel_1.default.updateProduct(id, { name, description, price, stock });
        res.json(updatedProduct);
    }
    catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedProduct = yield productModel_1.default.deleteProduct(id);
        res.json(deletedProduct);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.deleteProduct = deleteProduct;
