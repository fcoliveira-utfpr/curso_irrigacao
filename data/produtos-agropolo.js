// Catálogo Agropolo — Aspersores de impacto — 3 peças (NY-25, NY-30 e NY-23S Setorial).
// Fonte de conteúdo (nome, imagem, descrição, categoria). Os preços aqui são o padrão de fábrica;
// podem ser sobrescritos pela planilha precos.csv sem precisar editar este arquivo.
const PRODUTOS_AGROPOLO = [
  {
    id: 104,
    name: "Aspersor Agropolo NY-25",
    category: "Aspersores Agropolo",
    material: "Poliacetal",
    pressure: "20 a 35 m.c.a. (conforme bocal)",
    description: "Miniaspersor de impacto para pequenas áreas, hortas e jardins, com sistema de proteção contra abrasão e totalmente desmontável. Disponível com base fêmea de 3/4\" ou 1\". Vazões e alcances de referência medidos a 30 m.c.a. em ensaio da ESALQ/USP.",
    image: IMG + "ny25.jpg",
    diameters: [
      { size: "Amarelo x Tampão 2,50x0,00mm — 0,354 m³/h — Base 3/4\"", price: 22.00 },
      { size: "Amarelo x Tampão 2,50x0,00mm — 0,354 m³/h — Base 1\"", price: 22.00 },
      { size: "Verde x Tampão 2,80x0,00mm — 0,441 m³/h — Base 3/4\"", price: 25.00 },
      { size: "Verde x Tampão 2,80x0,00mm — 0,441 m³/h — Base 1\"", price: 25.00 },
      { size: "Vermelho x Tampão 3,00x0,00mm — 0,521 m³/h — Base 3/4\"", price: 27.00 },
      { size: "Vermelho x Tampão 3,00x0,00mm — 0,521 m³/h — Base 1\"", price: 27.00 },
      { size: "Azul x Tampão 3,20x0,00mm — 0,606 m³/h — Base 3/4\"", price: 29.00 },
      { size: "Azul x Tampão 3,20x0,00mm — 0,606 m³/h — Base 1\"", price: 29.00 },
      { size: "Amarelo x Cinza 2,50x2,50mm — 0,647 m³/h — Base 3/4\"", price: 26.00 },
      { size: "Amarelo x Cinza 2,50x2,50mm — 0,647 m³/h — Base 1\"", price: 26.00 },
      { size: "Verde x Cinza 2,80x2,50mm — 0,731 m³/h — Base 3/4\"", price: 29.00 },
      { size: "Verde x Cinza 2,80x2,50mm — 0,731 m³/h — Base 1\"", price: 29.00 },
      { size: "Vermelho x Cinza 3,00x2,50mm — 0,821 m³/h — Base 3/4\"", price: 32.00 },
      { size: "Vermelho x Cinza 3,00x2,50mm — 0,821 m³/h — Base 1\"", price: 32.00 },
      { size: "Azul x Cinza 3,20x2,50mm — 0,901 m³/h — Base 3/4\"", price: 34.00 },
      { size: "Azul x Cinza 3,20x2,50mm — 0,901 m³/h — Base 1\"", price: 34.00 },
      { size: "Laranja x Cinza 3,50x2,50mm — 1,072 m³/h — Base 3/4\"", price: 38.00 },
      { size: "Laranja x Cinza 3,50x2,50mm — 1,072 m³/h — Base 1\"", price: 38.00 }
    ]
  },
  {
    id: 105,
    name: "Aspersor Agropolo NY-30",
    category: "Aspersores Agropolo",
    material: "Poliamida (Nylon) de engenharia",
    pressure: "20 a 45 m.c.a. (conforme bocal)",
    description: "Aspersor de impacto totalmente desmontável, com sistema de proteção contra abrasão. Disponível com eixo em nylon (ER) ou eixo em latão (ERL, mais durável). Vazões e alcances de referência medidos a 30 m.c.a. em ensaio da ESALQ/USP.",
    image: IMG + "ny30.jpg",
    diameters: [
      { size: "Tampão Preto 0mm — 1,44 m³/h — Eixo Nylon (ER)", price: 32.00 },
      { size: "Tampão Preto 0mm — 1,44 m³/h — Eixo Latão (ERL)", price: 42.00 },
      { size: "Curto Vermelho 4,00mm — 2,19 m³/h — Eixo Nylon (ER)", price: 38.00 },
      { size: "Curto Vermelho 4,00mm — 2,19 m³/h — Eixo Latão (ERL)", price: 50.00 },
      { size: "Longo Roxo 3,00mm — 1,67 m³/h — Eixo Nylon (ER)", price: 42.00 },
      { size: "Longo Roxo 3,00mm — 1,67 m³/h — Eixo Latão (ERL)", price: 55.00 },
      { size: "Longo Laranja 4,00mm — 2,26 m³/h — Eixo Nylon (ER)", price: 45.00 },
      { size: "Longo Laranja 4,00mm — 2,26 m³/h — Eixo Latão (ERL)", price: 59.00 },
      { size: "Longo Verde 5,00mm — 2,66 m³/h — Eixo Nylon (ER)", price: 48.00 },
      { size: "Longo Verde 5,00mm — 2,66 m³/h — Eixo Latão (ERL)", price: 63.00 },
      { size: "Longo Vermelho 6,20mm — 3,53 m³/h — Eixo Nylon (ER)", price: 55.00 },
      { size: "Longo Vermelho 6,20mm — 3,53 m³/h — Eixo Latão (ERL)", price: 72.00 },
      { size: "Longo Azul 7,10mm — 4,10 m³/h — Eixo Nylon (ER)", price: 62.00 },
      { size: "Longo Azul 7,10mm — 4,10 m³/h — Eixo Latão (ERL)", price: 81.00 }
    ]
  },
  {
    id: 106,
    name: "Aspersor Agropolo NY-23S (Setorial)",
    category: "Aspersores Agropolo",
    material: "Poliacetal",
    pressure: "20 a 35 m.c.a. (conforme bocal)",
    description: "Versão setorial do aspersor de impacto Agropolo, indicada para regar apenas uma parte da área irrigada, como bordas de plantio ou divisas de propriedade. Totalmente desmontável, com sistema de proteção contra abrasão. Vazões e alcances de referência medidos a 30 m.c.a. em ensaio da ESALQ/USP.",
    image: IMG + "ny23s.jpg",
    diameters: [
      { size: "Amarelo 2,5mm — 0,39 m³/h", price: 28.00 },
      { size: "Verde 2,8mm — 0,49 m³/h", price: 32.00 },
      { size: "Vermelho 3,0mm — 0,56 m³/h", price: 36.00 },
      { size: "Azul 3,2mm — 0,64 m³/h", price: 40.00 },
      { size: "Laranja 3,5mm — 0,74 m³/h", price: 45.00 }
    ]
  }
];
