import {Request, Response} from 'express';
import Localizacion from '../models/localizacion';

export const getLocalizaciones = async(req: Request, res: Response) =>{
    const listaLocalizaciones = await Localizacion.findAll()
    res.json(listaLocalizaciones)
}