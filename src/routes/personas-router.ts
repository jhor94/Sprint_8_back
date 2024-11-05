import {Router} from 'express'
import { getPersonas, getPersona, deletPersona, postPersona, updatePersona } from '../controllers/personas'


const router = Router()

router.get('/', getPersonas)
router.get('/:id', getPersona)
router.delete('/:id', deletPersona)
router.post('/', postPersona)
router.put('/:id', updatePersona)

export default router;