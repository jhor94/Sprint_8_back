import {Router} from 'express'
import { getEventos, getEvento, deleteEvento, postEvento, updateEvento } from '../controllers/eventos'


const router = Router()

router.get('/', getEventos)
router.get('/:id', getEvento)
router.delete('/:id', deleteEvento)
router.post('/', postEvento)
router.put('/:id', updateEvento)

export default router;