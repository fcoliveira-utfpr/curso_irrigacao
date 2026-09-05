// Catálogo Schneider/Franklin Electric — Motobombas centrífugas — 10 famílias de produto.
// Extraído da "Tabela de Seleção de Bombas e Motobombas" (schneider_tabela_selecao.pdf).
// Simplificação didática: cada família vira 1 card, com potência (CV) + fase como variante —
// a curva completa de vazão x altura manométrica de cada CV não é reproduzida (consulte a
// tabela original do fabricante para dimensionamento real de projeto).
// FIT e FIT PRO (bombas normalizadas/monobloco de grande porte, com seleção por gráfico de
// curvas em vez de tabela) não foram incluídas por fugirem da escala de irrigação rural/predial
// de pequeno-médio porte deste catálogo.
// Fonte de conteúdo (nome, imagem, descrição, categoria). Os preços aqui são o padrão de fábrica;
// podem ser sobrescritos pela planilha precos.csv sem precisar editar este arquivo.
const PRODUTOS_SCHNEIDER_BOMBAS = [

  // ===================== MOTOBOMBAS CENTRÍFUGAS MONOESTÁGIO (ROTOR FECHADO) =====================
  {
    id: 116,
    name: "Motobomba Centrífuga BC-98",
    category: "Motobombas Centrífugas Monoestágio (Rotor Fechado)",
    material: "Rotor fechado de Noryl com 30% fibra de vidro, motor WEG IP-21",
    pressure: "Pressão máxima sem vazão: 18 a 20 m.c.a. — sucção/recalque 3/4\"",
    description: "Motobomba para aplicação em residências, fontes, cascatas e chácaras. Primeira motobomba centrífuga do Brasil a receber o selo PROCEL (menor consumo de energia). Equipamento de uso exclusivamente residencial.",
    image: IMG + "bc98_bomba.jpg",
    diameters: [
      { size: "1/3 CV — Monofásico", price: 420.00 },
      { size: "1/2 CV — Monofásico", price: 480.00 }
    ]
  },
  {
    id: 117,
    name: "Motobomba Centrífuga BCR",
    category: "Motobombas Centrífugas Monoestágio (Rotor Fechado)",
    material: "Rotor fechado de alumínio (BCR-2000) ou Noryl com fibra de vidro (BCR-2010), motor WEG",
    pressure: "Pressão máxima sem vazão: 18 a 29 m.c.a. — sucção/recalque 3/4\" a 1\"",
    description: "Motobomba para aplicação em residências, fontes, cascatas e chácaras. Modelo BCR-2000 com rotor de alumínio; BCR-2010 com rotor de Noryl e fibra de vidro, de maior resistência. Equipamento de uso exclusivamente residencial.",
    image: IMG + "bcr_bomba.jpg",
    diameters: [
      { size: "1/4 CV — Monofásico (BCR-2000)", price: 380.00 },
      { size: "1/3 CV — Monofásico (BCR-2000)", price: 420.00 },
      { size: "1/2 CV — Monofásico (BCR-2000/2010)", price: 480.00 },
      { size: "3/4 CV — Monofásico (BCR-2010)", price: 580.00 },
      { size: "1 CV — Monofásico (BCR-2010)", price: 680.00 }
    ]
  },
  {
    id: 118,
    name: "Motobomba Centrífuga BC-91",
    category: "Motobombas Centrífugas Monoestágio (Rotor Fechado)",
    material: "Rotor fechado de alumínio (ou bronze no modelo T Bronze), motor WEG IP-21",
    pressure: "Pressão máxima sem vazão: 13 a 28 m.c.a. — sucção 1.1/4\", recalque 1\"",
    description: "Motobomba para aplicação em residências, chácaras, abastecimento predial, indústrias e agricultura. Disponível como modelo S (sem intermediário) ou T (com intermediário, indicado para água acima de 70°C com rotor e selo de Viton).",
    image: IMG + "bc91_bomba.jpg",
    diameters: [
      { size: "1/6 CV — Monofásico", price: 350.00 },
      { size: "1/4 CV — Monofásico", price: 390.00 },
      { size: "1/3 CV — Monofásico", price: 430.00 },
      { size: "1/3 CV — Trifásico", price: 400.00 },
      { size: "1/2 CV — Monofásico", price: 480.00 },
      { size: "1/2 CV — Trifásico", price: 450.00 },
      { size: "3/4 CV — Monofásico", price: 580.00 },
      { size: "3/4 CV — Trifásico", price: 540.00 },
      { size: "1 CV — Monofásico", price: 680.00 },
      { size: "1 CV — Trifásico", price: 630.00 }
    ]
  },
  {
    id: 119,
    name: "Motobomba Centrífuga BC-92",
    category: "Motobombas Centrífugas Monoestágio (Rotor Fechado)",
    material: "Rotor fechado de alumínio (ou bronze/Viton para água acima de 70°C), motor WEG IP-21",
    pressure: "Pressão máxima sem vazão: 15 a 47 m.c.a. — sucção/recalque de 1.1/4\" a 2.1/2\" conforme potência",
    description: "Motobomba para aplicação em chácaras, abastecimento predial, agricultura, sistemas de refrigeração e indústrias. Disponível em bocais roscados (R) ou flangeados conforme Norma DIN 1092-1 (F).",
    image: IMG + "bc92_bomba.jpg",
    diameters: [
      { size: "3/4 CV — Monofásico", price: 650.00 },
      { size: "3/4 CV — Trifásico", price: 600.00 },
      { size: "1 CV — Monofásico", price: 750.00 },
      { size: "1 CV — Trifásico", price: 690.00 },
      { size: "1.5 CV — Monofásico", price: 950.00 },
      { size: "1.5 CV — Trifásico", price: 880.00 },
      { size: "2 CV — Monofásico", price: 1150.00 },
      { size: "2 CV — Trifásico", price: 1050.00 },
      { size: "3 CV — Monofásico", price: 1450.00 },
      { size: "3 CV — Trifásico", price: 1320.00 }
    ]
  },
  {
    id: 120,
    name: "Motobomba Centrífuga BC-21",
    category: "Motobombas Centrífugas Monoestágio (Rotor Fechado)",
    material: "Rotor fechado de ferro fundido, motor WEG IP-55",
    pressure: "Pressão máxima sem vazão: 19 a 41 m.c.a. — sucção/recalque de 1.1/4\" a 2.1/2\" conforme potência",
    description: "Motobomba para aplicação em cabines de pintura, irrigação, sistemas de refrigeração, fontes e cascatas, abastecimento predial, indústrias e sistemas de prevenção e combate a incêndio. Disponível em bocais roscados (R) ou flangeados (F).",
    image: IMG + "bc21_bomba.jpg",
    diameters: [
      { size: "1.5 CV — Monofásico", price: 1200.00 },
      { size: "1.5 CV — Trifásico", price: 1100.00 },
      { size: "2 CV — Monofásico", price: 1400.00 },
      { size: "2 CV — Trifásico", price: 1280.00 },
      { size: "3 CV — Monofásico", price: 1750.00 },
      { size: "3 CV — Trifásico", price: 1580.00 },
      { size: "4 CV — Monofásico", price: 2100.00 },
      { size: "4 CV — Trifásico", price: 1900.00 },
      { size: "5 CV — Monofásico", price: 2450.00 },
      { size: "5 CV — Trifásico", price: 2200.00 },
      { size: "7.5 CV — Trifásico", price: 3100.00 },
      { size: "10 CV — Trifásico", price: 3900.00 },
      { size: "12.5 CV — Trifásico", price: 4700.00 },
      { size: "15 CV — Trifásico", price: 5500.00 }
    ]
  },
  {
    id: 121,
    name: "Motobomba Centrífuga BC-22",
    category: "Motobombas Centrífugas Monoestágio (Rotor Fechado)",
    material: "Rotor fechado de alumínio ou ferro fundido (conforme potência), motor WEG IP-55",
    pressure: "Pressão máxima sem vazão: 33 a 81 m.c.a. — sucção/recalque de 1.1/4\" a 2.1/2\" conforme potência",
    description: "Motobomba para irrigação, abastecimento predial, sistemas de refrigeração, sistemas de prevenção e combate a incêndio e indústrias. Disponível em bocais roscados (R) ou flangeados (F).",
    image: IMG + "bc22_bomba.jpg",
    diameters: [
      { size: "3 CV — Monofásico", price: 1900.00 },
      { size: "3 CV — Trifásico", price: 1720.00 },
      { size: "4 CV — Monofásico", price: 2250.00 },
      { size: "4 CV — Trifásico", price: 2050.00 },
      { size: "5 CV — Monofásico", price: 2550.00 },
      { size: "5 CV — Trifásico", price: 2320.00 },
      { size: "7.5 CV — Trifásico", price: 3250.00 },
      { size: "10 CV — Trifásico", price: 4100.00 },
      { size: "12.5 CV — Trifásico", price: 4950.00 },
      { size: "15 CV — Trifásico", price: 5800.00 },
      { size: "20 CV — Trifásico", price: 7200.00 },
      { size: "25 CV — Trifásico", price: 8700.00 }
    ]
  },
  {
    id: 122,
    name: "Motobomba Centrífuga BC-23",
    category: "Motobombas Centrífugas Monoestágio (Rotor Fechado)",
    material: "Rotor fechado de ferro fundido, motor WEG IP-55",
    pressure: "Pressão máxima sem vazão: 55 a 117 m.c.a. — sucção/recalque de 2\" a 3\" conforme potência",
    description: "Motobomba de maior porte para irrigação, abastecimento predial, sistemas de refrigeração, sistemas de prevenção e combate a incêndio e indústrias. Disponível em bocais roscados (R) ou flangeados (F).",
    image: IMG + "bc23_bomba.jpg",
    diameters: [
      { size: "12.5 CV — Trifásico", price: 5800.00 },
      { size: "15 CV — Trifásico", price: 6700.00 },
      { size: "20 CV — Trifásico", price: 8200.00 },
      { size: "25 CV — Trifásico", price: 9800.00 },
      { size: "30 CV — Trifásico", price: 11500.00 }
    ]
  },

  // ===================== MOTOBOMBAS CENTRÍFUGAS MONOESTÁGIO (ROTOR SEMIABERTO) =====================
  {
    id: 123,
    name: "Motobomba Centrífuga MSA-21",
    category: "Motobombas Centrífugas Monoestágio (Rotor Semiaberto)",
    material: "Rotor semiaberto de ferro fundido nodular, motor WEG IP-55",
    pressure: "Pressão máxima sem vazão: 24 a 153 m.c.a. — sucção/recalque de 1.1/2\" a 2.1/2\" conforme potência",
    description: "Motobomba para bombeamento de efluentes não fibrosos, drenagem de águas servidas e pluviais, irrigação, fontes e cascatas, cabines de pintura e indústrias. Indicada para líquidos com sólidos em suspensão, conforme tamanho de sólido suportado por cada modelo.",
    image: IMG + "msa21_bomba.jpg",
    diameters: [
      { size: "4 CV — Trifásico", price: 2600.00 },
      { size: "5 CV — Trifásico", price: 2900.00 },
      { size: "7.5 CV — Trifásico", price: 3700.00 },
      { size: "10 CV — Trifásico", price: 4600.00 },
      { size: "12.5 CV — Trifásico", price: 5500.00 },
      { size: "15 CV — Trifásico", price: 6400.00 },
      { size: "20 CV — Trifásico", price: 7900.00 }
    ]
  },
  {
    id: 124,
    name: "Motobomba Centrífuga MSA-22",
    category: "Motobombas Centrífugas Monoestágio (Rotor Semiaberto)",
    material: "Rotor semiaberto de ferro fundido nodular, motor WEG IP-55",
    pressure: "Pressão máxima sem vazão: 37 a 80 m.c.a. — sucção 1.1/2\", recalque 1.1/4\"",
    description: "Motobomba para bombeamento de efluentes não fibrosos, drenagem de águas servidas e pluviais, irrigação e indústrias. Indicada para líquidos com sólidos em suspensão.",
    image: IMG + "msa22_bomba.jpg",
    diameters: [
      { size: "5 CV — Trifásico", price: 3100.00 },
      { size: "7.5 CV — Trifásico", price: 3950.00 },
      { size: "10 CV — Trifásico", price: 4900.00 },
      { size: "12.5 CV — Trifásico", price: 5850.00 },
      { size: "15 CV — Trifásico", price: 6800.00 },
      { size: "20 CV — Trifásico", price: 8300.00 }
    ]
  },

  // ===================== MOTOBOMBAS CENTRÍFUGAS DE AÇO INOX (ROTOR SEMIABERTO) =====================
  {
    id: 125,
    name: "Motobomba Centrífuga de Aço Inox MCI",
    category: "Motobombas Centrífugas de Aço Inox (Rotor Semiaberto)",
    material: "Rotor semiaberto de aço inox, motor WEG IP-21 ou IP-55",
    pressure: "Pressão máxima sem vazão: 14 a 41 m.c.a. — sucção/recalque de 1\" a 1.1/2\" conforme potência",
    description: "Motobomba em aço inox para transporte de produtos químicos, lavação de gases, tratamento de efluentes, vinhoto e indústrias. Uso condicionado à prévia consulta à fábrica para verificação de compatibilidade química entre materiais. Vedada para produtos medicinais e alimentícios.",
    image: IMG + "mci_bomba.jpg",
    diameters: [
      { size: "1/2 CV — Trifásico (MCI-RE)", price: 1450.00 },
      { size: "3/4 CV — Trifásico (MCI-RE)", price: 1650.00 },
      { size: "1 CV — Trifásico (MCI-RE)", price: 1900.00 },
      { size: "1.5 CV — Trifásico (MCI-RE)", price: 2400.00 },
      { size: "2 CV — Trifásico (MCI-RQ)", price: 2900.00 },
      { size: "3 CV — Trifásico (MCI-RQ)", price: 3700.00 },
      { size: "4 CV — Trifásico (MCI-RQ)", price: 4500.00 },
      { size: "5 CV — Trifásico (MCI-RQ)", price: 5300.00 },
      { size: "7.5 CV — Trifásico (MCI-RQ)", price: 6800.00 }
    ]
  }
];
