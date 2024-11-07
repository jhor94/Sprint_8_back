import {Router} from 'express';
import { deleteVenta, getVenta, getVentas, postVenta, updateVenta } from '../controllers/ventas';

const router = Router()

router.get('/',getVentas);
router.get('/:id',getVenta)
router.delete('/:id', deleteVenta)
router.post('/',postVenta)
router.put('/:id',updateVenta)


export default router