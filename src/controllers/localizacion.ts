import {Request, Response} from 'express';
import Localizacion from '../models/localizacion';

export const getLocalizaciones = async(req: Request, res: Response) =>{
    const listaLocalizaciones = await Localizacion.findAll()
    res.json(listaLocalizaciones)
}

export const getLocalizacion = async (req:Request, res: Response)=>{
    const {id} = req.params
    const localizacion = await Localizacion.findByPk(id)

    if(localizacion){
        res.json(localizacion)
    }else{
        res.status(404).json({message: `Localizacion con el id: ${id}no encontrada`})
    }
}

export const deleteLocalizacion = async(req: Request, res: Response)=>{
    const {id} = req.params
    const localizacion = await Localizacion.findByPk(id)

    if(!localizacion){
        res.status(404).json({message: `Localizacion con el id: ${id}`})
    }else{
        await localizacion.destroy()
        res.json({
            mensagge: `Localizacion con el id: ${id} ha sido eliminada`
        })
    }
}

export const postLocalizacion = async (req: Request, res: Response)=>{
    const {body} = req

    try{
        await Localizacion.create(body)

        res.json({message: `la localizacion fue creada con exito`})
    }catch(error){
        res.json({
            message: `Error al crear la localizacion`,
        })
    }
}

export const updateLocalizacion = async (req: Request, res: Response) => {
    const {body} = req
    const {id} = req.params

    try {
        const localizacion = await Localizacion.findByPk(id)

        if(localizacion){
            await localizacion.update(body)
            res.json({
                mensaje:`la localizacion con el id ${id} ha sido actualizada`
            })
        }else{
            res.status(404).json({
                message: `Localizacion no encontrada con el id ${id}`
            })
        }
        
    } catch (error) {
        res.json({
            message: `Error al actualizar la localizacion`
        })
    }
}