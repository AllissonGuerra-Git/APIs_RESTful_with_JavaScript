// src/seed.cjs

// 1. O .default é obrigatório porque o database_connection.js usa "export default"
const pool = require("./services/database_connection.js").default; 

// 2. Importando os scripts de população (certifique-se que renomeou para .cjs)
const seedCardapio = require("./controllers/database/seed/cardapioseed.cjs");
const seedComandas = require("./controllers/database/seed/comanda_seed.cjs");

async function seedAll() {
  try {
    console.log("Iniciando a população do banco TiDB...");

    // Executa a função de cada seed passando o pool de conexão
    await seedCardapio(pool); 
    console.log("✅ Cardápio finalizado.");

    await seedComandas(pool); 
    console.log("✅ Comandas finalizadas.");

    console.log("--- Todas as seeds executadas com sucesso! ---");
  } catch (err) {
    console.error("❌ Erro no orquestrador de seed:", err.message);
  } finally {
    // Agora o pool.end() vai funcionar porque pegamos o .default acima
    if (pool && typeof pool.end === 'function') {
      await pool.end();
      console.log("Conexão com TiDB encerrada.");
    }
  }
}

seedAll();