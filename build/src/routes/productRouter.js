"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = require("express");
const productController_1 = require("../controllers/productController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const productRouter = (0, express_1.Router)();
exports.productRouter = productRouter;
productRouter.use(authMiddleware_1.authMiddleware);
// /api/products
productRouter.get("/", productController_1.getAllProducts);
productRouter.get("/:id", productController_1.getProductById);
productRouter.post("/", productController_1.addProduct);
productRouter.patch("/:id", productController_1.updateProduct);
productRouter.delete("/:id", productController_1.deleteProduct);
