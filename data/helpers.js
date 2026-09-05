// Utilitários compartilhados de precificação — usados pelos arquivos de dados de cada catálogo/fonte.
const IMG = "images/produtos/";
const round2 = n => Math.round(n * 100) / 100;

// ---- Mangueiras gotejadoras: preço = base x fator(espaçamento) x fator(vazão), para bobina de 200m ----
const ESP_FACTOR = { 10: 1.32, 15: 1.20, 20: 1.10, 30: 1.00, 40: 0.92, 50: 0.85, 99: 0.70 };
const VAZ_FACTOR = { "1,0": 1.00, "1,5": 1.04, "2,6": 1.09, "4,0": 1.15 };

function mangueiraVariants(basePrice, espacamentos, vazoes) {
  const list = [];
  espacamentos.forEach(esp => {
    vazoes.forEach(vaz => {
      const price = round2(basePrice * ESP_FACTOR[esp] * VAZ_FACTOR[vaz]);
      list.push({ size: `${esp}cm • ${vaz} L/h/gotejador • bobina 200m`, price });
    });
  });
  return list;
}

// ---- Itens vendidos por pacote/caixa (conexões, válvulas de checagem etc.) ----
function packVariants(unitPrice, embQty, caixaQty) {
  const list = [{ size: "Unidade avulsa", price: round2(unitPrice) }];
  if (embQty) list.push({ size: `Pacote com ${embQty} un`, price: round2(unitPrice * embQty * 0.92) });
  if (caixaQty) list.push({ size: `Caixa com ${caixaQty} un`, price: round2(unitPrice * caixaQty * 0.85) });
  return list;
}
