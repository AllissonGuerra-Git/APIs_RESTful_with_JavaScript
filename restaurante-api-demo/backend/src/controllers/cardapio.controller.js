// Controlador do Cardápio
// Este arquivo é como o "Chef de Cozinha" que mostra o menu aos clientes

const { cardapio } = require('../services/database');

// Função que retorna todo o cardápio
// Quando o cliente pede para ver o menu, essa função é executada
const getCardapio = (req, res) => {
  try {
    // Retorna o array do cardápio com status 200 (OK)
    res.status(200).json({
      sucesso: true,
      mensagem: 'Cardápio recuperado com sucesso',
      dados: cardapio
    });
  } catch (error) {
    // Se algo der errado, retorna erro 500
    res.status(500).json({
      sucesso: false,
      mensagem: 'Erro ao buscar cardápio',
      erro: error.message
    });
  }
};

// Exporta a função para ser usada nas rotas
module.exports = {
  getCardapio
};
