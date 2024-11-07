import { Request, Response } from 'express';
import Venta from '../models/ventas'

export const getVentas = async (req: Request, res: Response) => {
    const listaVentas = await Venta.findAll();

    res.json(listaVentas);
}

export const getVenta = async (req: Request, res: Response) => {
    const { id } = req.params;
    const venta = await Venta.findByPk(id);

    if (venta) {
        res.json(venta)
    } else {
        res.status(404).json({ msg: 'Venta no encontrada' })
    }
}
export const deleteVenta = async (req:Request, res: Response)=>{
    const {id} = req.params;
    const venta = await Venta.findByPk(id);

    if(!venta){
        res.status(404).json({msg: 'Venta no encontrada'})
    }else{
        await venta.destroy();
        res.json({msg: 'Venta eliminada'})
    }
}

export const postVenta = async (req: Request, res: Response)=>{
    const {body} = req

    try {
        await Venta.create(body)
        res.json({msg: 'La venta fue ingresada con exito'})
    } catch (error) {
        res.json({
            msg: 'Error al ingresar la venta',
        })
    }
}

export const updateVenta = async (req: Request, res: Response)=>{
    const {body} = req;
    const {id} = req.params;

    try {
        const venta = await Venta.findByPk(id);
        if(venta){
            await venta.update(body);
            res.json({
                msg: 'La venta fue actualizada con exito'
            })
        }else{
            res.status(404).json({msg: 'La venta no es encontrada'})
        }
    } catch (error) {
        res.json({msg: 'Error al actualizar venta'})
    }
}