import {Router} from 'express';
import { getLocalizaciones } from '../controllers/localizacion'; 

const router = Router()

router.get('/',getLocalizaciones)


export default router;