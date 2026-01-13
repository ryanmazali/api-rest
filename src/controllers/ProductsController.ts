import { Request, Response } from 'express'
import { AppError } from '../utils/AppError'
import { z } from "zod"

class ProductsController {
    index(req: Request, res: Response){
        const { page, limit } = req.query

        res.send(`Produtos - página ${page} de ${limit}`)
    }

    create(req: Request, res: Response){    
        const bodySchema = z.object({
            name: z.string({ required_error: "Name is required!" }).trim().min(6, "Name must be at least 6 characters long"),
            price: z.number({ required_error: "Price is required!" }).positive("Price must be a positive number")
        })

        const { name, price } = bodySchema.parse(req.body)

        res.status(201).json({ name , price, user_id: req.user_id })
    }
}

export { ProductsController }





