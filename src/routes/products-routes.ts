import { Router } from "express"
import { myMiddleware } from "../middlewares/my-middleware"
import { ProductsController } from "../controllers/ProductsController"

const productsController = new ProductsController()

const productsRoutes = Router()

productsRoutes.get("/", productsController.index)

//Middleware Local em rota específica.
productsRoutes.post("/", myMiddleware, productsController.create)

export { productsRoutes }