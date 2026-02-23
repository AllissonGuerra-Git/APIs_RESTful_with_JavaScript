// Controlador de Comandas (Pedidos)
// Este arquivo é como o "Chef de Pedidos" que recebe e gerencia os pedidos dos clientes

// CORREÇÃO 1: Mudamos require para import e adicionamos .js no final
// O ponto final (.) indica que o arquivo está na mesma pasta/subpasta
import { comandas } from './database/mock/comandas.mock.js';
// Função que retorna todas as comandas (pedidos) registradas
export const getComandas = (req, res) => { // Adicionamos 'export' antes de const
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
export const createComanda = (req, res) => {
  try {
    const { mesa, itens, total } = req.body;

    const novaComanda = {
      id: comandas.length + 1,
      mesa,
      itens,
      total,
      status: 'pendente',
      dataPedido: new Date().toISOString()
    };

    comandas.push(novaComanda);

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

// Função para atualizar o status de uma comanda (PATCH)
export const updateComandaStatus = (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({
        sucesso: false,
        mensagem: 'Status é obrigatório para atualizar a comanda'
      });
    }

    const comandaIndex = comandas.findIndex(c => c.id == id);

    if (comandaIndex === -1) {
      return res.status(404).json({
        sucesso: false,
        mensagem: 'Comanda não encontrada.'
      });
    }

    comandas[comandaIndex].status = status;
    return res.status(200).json(comandas[comandaIndex]);

  } catch (error) {
    return res.status(500).json({
      sucesso: false,
      mensagem: 'Erro ao atualizar comanda',
      erro: error.message
    });
  }
};

// Função para deletar uma comanda (DELETE)
export const deleteComanda = (req, res) => {
  try {
    const { id } = req.params;
    const comandaIndex = comandas.findIndex(c => c.id == id);

    if (comandaIndex === -1) {
      return res.status(404).json({
        sucesso: false,
        mensagem: 'Comanda não encontrada.'
      });
    }

    comandas.splice(comandaIndex, 1);

    return res.status(200).json({
      sucesso: true,
      mensagem: 'Comanda deletada com sucesso'
    });

  } catch (error) {
    return res.status(500).json({
      sucesso: false,
      mensagem: 'Erro ao deletar comanda',
      erro: error.message
    });
  }
};

// CORREÇÃO 2: Exportação final no formato ES Module
export default {
  getComandas,
  createComanda,
  updateComandaStatus,
  deleteComanda 
};