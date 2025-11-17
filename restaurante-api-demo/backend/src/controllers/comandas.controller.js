// Controlador de Comandas (Pedidos)
// Este arquivo é como o "Chef de Pedidos" que recebe e gerencia os pedidos dos clientes

const { comandas } = require('../services/database');

// Função que retorna todas as comandas (pedidos) registradas
const getComandas = (req, res) => {
  try {
    res.status(200).json({
      sucesso: true,
      mensagem: 'Comandas recuperadas com sucesso',
      quantidade: comandas.length,
      dados: comandas
    });
  } catch (error) {
    res.status(500).json({
      sucesso: false,
      mensagem: 'Erro ao buscar comandas',
      erro: error.message
    });
  }
};

// Função que cria uma nova comanda (pedido)
// Recebe os dados do pedido do cliente via req.body
const createComanda = (req, res) => {
  try {
    // Extrai os dados enviados pelo cliente
    const { mesa, itens, total } = req.body;

    // Validação básica: verifica se todos os campos obrigatórios foram enviados
    if (!mesa || !itens || !total) {
      return res.status(400).json({
        sucesso: false,
        mensagem: 'Dados incompletos. Envie: mesa, itens e total'
      });
    }

    // Cria um novo objeto de comanda
    const novaComanda = {
      id: comandas.length + 1, // ID automático baseado no tamanho do array
      mesa,
      itens,
      total,
      status: 'pendente',
      dataPedido: new Date().toISOString()
    };

    // Adiciona a nova comanda ao array
    comandas.push(novaComanda);

    // Retorna a comanda criada com status 201 (Created)
    res.status(201).json({
      sucesso: true,
      mensagem: 'Comanda criada com sucesso',
      dados: novaComanda
    });
  } catch (error) {
    res.status(500).json({
      sucesso: false,
      mensagem: 'Erro ao criar comanda',
      erro: error.message
    });
  }
};

// Exporta as funções para serem usadas nas rotas
module.exports = {
  getComandas,
  createComanda
};
