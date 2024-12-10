import { Router } from "express";
import { addProduct, getProductById, getAllProducts, updateProduct, deleteProduct } from "../controllers/productController"
import { authMiddleware } from "../middleware/authMiddleware";

const productRouter = Router()

productRouter.use(authMiddleware)

// /api/products
productRouter.get("/", getAllProducts)
productRouter.get("/:id", getProductById)
productRouter.post("/", addProduct)
productRouter.patch("/:id", updateProduct)
productRouter.delete("/:id", deleteProduct)

export { productRouter }