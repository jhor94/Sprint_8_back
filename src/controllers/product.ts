import {Request,Response} from 'express'

export const getProducts = (req: Request, res: Response) => {

    res.json({
        msg: "ola productos"
    })
}

export const getProduct= (req: Request, res: Response) => {
    const {id} = req.params
    res.json({
        msg: "ola productos",
        id
    })
}

export const deletProduct= (req: Request, res: Response) => {
    const {id} = req.params
    res.json({
        msg: "delet productos",
        id
    })
}

export const postProduct= (req: Request, res: Response) => {
    const {body} = req
    res.json({
        msg: "post productos",
        body
    })
}

export const updateProduct= (req: Request, res: Response) => {
    const {body} = req
    const {id} = req.params
    res.json({
        msg: "update productos",
        id,
        body
    })
}