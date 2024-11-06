import {Request, Response} from 'express';
import Eventos from '../models/eventos';

export const getEventos = async(req: Request, res: Response) =>{
    const listaEventos = await Eventos.findAll()
    res.json(listaEventos)
}

export const getEvento = async (req:Request, res: Response)=>{
    const {id} = req.params
    const evento = await Eventos.findByPk(id)

    if(evento){
        res.json(evento)
    }else{
        res.status(404).json({message: `El evento con el id: ${id}no es encontrado`})
    }
}

export const deleteEvento = async(req: Request, res: Response)=>{
    const {id} = req.params
    const evento = await Eventos.findByPk(id)

    if(!evento){
        res.status(404).json({message: `Error del evento con el id: ${id}`})
    }else{
        await evento.destroy()
        res.json({
            mensagge: `El evento con el id: ${id} ha sido eliminado`
        })
    }
}

export const postEvento = async (req: Request, res: Response)=>{
    const {body} = req

    try{
        await Eventos.create(body)

        res.json({message: `El evento fue creado con exito`})
    }catch(error){
        res.json({
            message: `Error al crear el evento`,
        })
    }
}

export const updateEvento = async (req: Request, res: Response) => {
    const {body} = req
    const {id} = req.params

    try {
        const evento = await Eventos.findByPk(id)

        if(evento){
            await evento.update(body)
            res.json({
                mensaje:`El evento con el id ${id} ha sido actualizado`
            })
        }else{
            res.status(404).json({
                message: `Evento no encontrado con el id ${id}`
            })
        }
        
    } catch (error) {
        res.json({
            message: `Error al actualizar el evento`
        })
    }
}