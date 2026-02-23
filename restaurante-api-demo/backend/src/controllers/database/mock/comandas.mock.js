const comandas = [
  { 
    id: 1, // <--- ADICIONE ESTA LINHA
    mesa: 1, 
    itens: ["Pizza Margherita", "Refrigerante 350ml"], 
    total: 42.5, 
    status: "Aberta", 
    dataPedido: new Date().toISOString() 
  },
  { 
    id: 2, // <--- ADICIONE ESTA LINHA
    mesa: 2, 
    itens: ["Hambúrguer Artesanal", "Salada Caesar"], 
    total: 50.5, 
    status: "Fechada", 
    dataPedido: new Date().toISOString() 
  },
  { 
    id: 3, // <--- ADICIONE ESTA LINHA
    mesa: 3, 
    itens: ["Lasanha à Bolonhesa"], 
    total: 40.0, 
    status: "Aberta", 
    dataPedido: new Date().toISOString()
  }
];

export { comandas };