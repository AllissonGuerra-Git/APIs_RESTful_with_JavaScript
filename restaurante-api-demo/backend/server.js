// server.js
import app from './app.js'; // Mudamos de require para import + extensão .js

// Define a porta do servidor
const PORT = 4000;

// ========== INICIA O SERVIDOR ==========
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
  console.log(`📋 Cardápio disponível em http://localhost:${PORT}/api/cardapio`);
  console.log(`📝 Comandas disponíveis em http://localhost:${PORT}/api/comandas`);
});