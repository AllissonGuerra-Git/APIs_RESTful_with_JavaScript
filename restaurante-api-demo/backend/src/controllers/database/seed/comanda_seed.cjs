// src/controllers/database/seed/comanda_seed.cjs

// 1. Importamos as comandas do arquivo de mock
const { comandas } = require("../mock/comandas.mock.cjs"); 

async function seedComandas(pool) {
  const conn = await pool.getConnection();
  try {
    console.log("Populando comandas...");
    
    // Limpa a tabela antes de inserir
    await conn.query("DELETE FROM comandas");

    // 2. Usamos 'comandas' (o mesmo nome lá de cima)
    for (const comanda of comandas) {
      await conn.query(
        "INSERT INTO comandas (mesa, itens, total, status, dataPedido) VALUES (?, ?, ?, ?, ?)",
        [
          comanda.mesa, 
          JSON.stringify(comanda.itens), 
          comanda.total, 
          comanda.status, 
          comanda.dataPedido
        ]
      );
    }

    console.log("Tabela comandas populada!");
  } catch (err) {
    console.error("Erro ao popular tabela comandas:", err);
  } finally {
    if (conn) conn.release(); // Libera a conexão de volta para o pool
  }
}

module.exports = seedComandas;