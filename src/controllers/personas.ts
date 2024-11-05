import { Request, Response } from 'express'
import Persona from '../models/persona'

export const getPersonas = async (req: Request, res: Response) => {
    const listPersonas = await Persona.findAll()

    res.json(listPersonas)
}

export const getPersona = async (req: Request, res: Response) => {
    const { id } = req.params
    const persona = await Persona.findByPk(id)

    if (persona) {
        res.json(persona)
    } else {
        res.status(404).json({ message: `Persona no encontrada con el id: ${id}` })
    }

}

export const deletPersona = async (req: Request, res: Response) => {
    const { id } = req.params
    const persona = await Persona.findByPk(id);

    if (!persona) {
        res.status(404).json({ message: `Persona no encontrada con el id: ${id}` })
    } else {
        await persona.destroy() //con el metodo destroy elimina la persona
        res.json({
            message: `Persona eliminada con el id: ${id}`,
        })
    }
}

export const postPersona = async (req: Request, res: Response) => {
    const { body } = req

    try {
        await Persona.create(body)

        res.json({ msg: "la persona fue agregada con exito", })
    } catch (error) {
        console.log(error)
        res.json({
            message: "Error al agregar la persona",
        })
    }
}

export const updatePersona = async (req: Request, res: Response) => {
    const { body } = req
    const { id } = req.params


    try {
        const persona = await Persona.findByPk(id)

        if (persona) {
            await persona.update(body)
            res.json({
                message: "Persona actualizada con exito",
            })

        } else {
            res.status(404).json({ message: `Persona no encontrada con el id: ${id}`})
        }

    } catch (error) {
        console.log(error)
        res.json({
            message: "Error al agregar la persona",
        })
    }
}