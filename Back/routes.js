
import { Router } from "express"

import { mercadoriaCreate, mercadoriaDestroy, mercadoriaEdit, mercadoriaIndex, mercadoriaSearch } from "./controllers/mercadoriaController.js"

const router = Router()

router.get('/mercadorias', mercadoriaIndex)
      .post('/cadastrar', mercadoriaCreate)
      .delete('/mercadoria_delete/:id', mercadoriaDestroy)
      .get('/mercadoria_buscar/:nome', mercadoriaSearch)
      .put('/mercadoria_editar/:id', mercadoriaEdit)
      
export default router
