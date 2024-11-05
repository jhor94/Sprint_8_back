import {Request,Response} from 'express'

export const getPersonas = (req: Request, res: Response) => {

    res.json({
        msg: "ola Personas"
    })
}

export const getPersona= (req: Request, res: Response) => {
    const {id} = req.params
    res.json({
        msg: "ola Personas",
        id
    })
}

export const deletPersona= (req: Request, res: Response) => {
    const {id} = req.params
    res.json({
        msg: "delet Personas",
        id
    })
}

export const postPersona= (req: Request, res: Response) => {
    const {body} = req
    res.json({
        msg: "post Personas",
        body
    })
}

export const updatePersona= (req: Request, res: Response) => {
    const {body} = req
    const {id} = req.params
    res.json({
        msg: "update Personas",
        id,
        body
    })
}