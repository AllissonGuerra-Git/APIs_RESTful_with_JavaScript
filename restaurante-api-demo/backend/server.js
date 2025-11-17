// Servidor Principal - Coração do Back-end
// Este arquivo inicializa o Express e configura toda a API

const express = require('express');
const cors = require('cors');
const apiRoutes = require('./src/routes/api.routes');

// Cria a aplicação Express
const app = express();

// Define a porta do servidor
const PORT = 4000;

// ========== MIDDLEWARES ==========
// CORS: Permite que o front-end (que rodará em outra porta) acesse nossa API
app.use(cors());

// express.json(): Permite que o servidor "entenda" JSON enviado nas requisições
// Sem isso, o req.body estaria sempre vazio!
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

// ========== INICIA O SERVIDOR ==========
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
  console.log(`📋 Cardápio disponível em http://localhost:${PORT}/api/cardapio`);
  console.log(`📝 Comandas disponíveis em http://localhost:${PORT}/api/comandas`);
});
