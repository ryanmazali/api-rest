import { randomUUID } from 'crypto'
import { Request, Response } from 'express'

export function myMiddleware(
    req: Request, 
    res: Response, 
    next: Function
) {
    req.user_id = randomUUID()

    console.log("Middleware executado!")
    
    return next()
}