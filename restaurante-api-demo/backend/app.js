// Configuração da Aplicação Express
// Este arquivo configura o Express, mas NÃO inicia o servidor
// Isso permite que os testes importem o app sem subir o servidor

import express from 'express';
import cors from 'cors';
import 'dotenv/config'; // Importante para ler variáveis do arquivo .env
import apiRoutes from './src/routes/api.routes.js'; // Note o .js no final

// Cria a aplicação Express
const app = express();

// CORREÇÃO: No Node.js (Backend) usamos process.env e não import.meta.env
// Também corrigi o "htttp" para "http"
const baseURL = process.env.VITE_API_URL || "http://localhost:4000/api";

// ========== MIDDLEWARES ==========
// CORS: Permite que o front-end (que rodará em outra porta) acesse nossa API
app.use(cors());

// express.json(): Permite que o servidor "entenda" JSON enviado nas requisições
app.use(express.json());

// ========== ROTA RAIZ (Teste) ==========
app.get('/', (req, res) => {
  res.json({
    mensagem: '🍽️ Bem-vindo à API do Restaurante!',
    versao: '1.0.0',
    endpoints: {
      cardapio: 'GET /api/cardapio',
      listarComandas: 'GET /api/comandas',
      criarComanda: 'POST /api/comandas'
    }
  });
});

// ========== ROTAS DA API ==========
// Todas as rotas começarão com /api
app.use('/api', apiRoutes);

// Exporta o app para ser usado pelo server.js e pelos testes
// CORREÇÃO: Em "type": "module", usamos export default
export default app;
