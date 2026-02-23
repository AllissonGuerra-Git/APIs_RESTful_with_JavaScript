// Controlador do Cardápio
// Este arquivo é como o "Chef de Cozinha" que mostra o menu aos clientes

// CORREÇÃO: Mudamos require para import e adicionamos .js
import db from '../services/database_connection.js';

// Função que retorna todo o cardápio
export const listarCardapio = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM cardapio');

    res.json({
      sucesso: true,
      cardapio: rows
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ sucesso: false, mensagem: 'Erro ao listar cardápio' });
  }
};

// Exporta as funções para serem usadas nas rotas (Padrão ES Modules)
export default {
  listarCardapio
};