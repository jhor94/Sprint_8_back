import {Router} from 'express'
import { getProducts, getProduct, deletProduct, postProduct, updateProduct } from '../controllers/product'


const router = Router()

router.get('/', getProducts)
router.get('/:id', getProduct)
router.delete('/:id', deletProduct)
router.post('/', postProduct)
router.put('/:id', updateProduct)

export default router;