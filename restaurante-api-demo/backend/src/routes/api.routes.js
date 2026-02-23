import { Router } from 'express';
// Importe os controllers com chaves { } e .js no final
import { listarCardapio } from '../controllers/cardapio.controller.js';
import { getComandas, createComanda, updateComandaStatus, deleteComanda } from '../controllers/comandas.controller.js';

const router = Router();

// Verifique se os nomes aqui batem exatamente com o que foi importado lá em cima
router.get('/cardapio', listarCardapio); 

router.get('/comandas', getComandas);
router.post('/comandas', createComanda);
router.patch('/comandas/:id', updateComandaStatus);
router.delete('/comandas/:id', deleteComanda);

export default router;