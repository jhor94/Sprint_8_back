import {Router} from 'express';
import { getLocalizaciones, getLocalizacion, deleteLocalizacion, postLocalizacion, updateLocalizacion } from '../controllers/localizacion'; 

const router = Router()

router.get('/',getLocalizaciones)
router.get('/:id',getLocalizacion)
router.delete('/:id',deleteLocalizacion)
router.post('/',postLocalizacion)
router.put('/:id',updateLocalizacion)


export default router;