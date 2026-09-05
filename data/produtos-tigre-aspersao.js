// Catálogo Tigre Aspersão (inspirado no "Catálogo Irrigação" da Tigre, seção 7. Aspersores) — 15 peças.
// Fonte de conteúdo (nome, imagem, descrição, categoria). Os preços aqui são o padrão de fábrica;
// podem ser sobrescritos pela planilha precos.csv sem precisar editar este arquivo.
const PRODUTOS_TIGRE_ASPERSAO = [

  // ===================== ASPERSORES TIGRE (6) =====================
  {
    id: 32,
    name: "Mini Aspersor TIGRE Pingo 360",
    category: "Aspersores TIGRE",
    material: "Termoplástico de engenharia aditivado contra raios UV",
    pressure: "15 a 40 m.c.a. (conforme bocal)",
    description: "Aspersor de impacto de pequeno porte, com jato quebrado por mola, indicado para irrigação de hortaliças, jardins e pequenas áreas. Ampla faixa de vazão, fácil instalação e alta resistência a raios UV.",
    image: IMG + "mini_pingo_360.jpg",
    diameters: [
      { size: "Bocal 2400", price: 18.00 },
      { size: "Bocal 2420", price: 18.00 },
      { size: "Bocal 2600", price: 18.50 },
      { size: "Bocal 2624", price: 18.50 },
      { size: "Bocal 2800", price: 19.00 },
      { size: "Bocal 2824", price: 19.00 },
      { size: "Bocal 3026", price: 19.50 },
      { size: "Bocal 3226", price: 20.00 },
      { size: "Bocal 3426", price: 20.50 },
      { size: "Bocal 3600", price: 21.00 },
      { size: "Bocal 3628", price: 21.00 },
      { size: "Bocal 4032", price: 22.00 },
      { size: "Sem Bocal", price: 16.50 }
    ]
  },
  {
    id: 33,
    name: "Mini Aspersor TIGRE Pingo 360 Sem Parafuso",
    category: "Aspersores TIGRE",
    material: "Termoplástico de engenharia aditivado contra raios UV",
    pressure: "15 a 40 m.c.a. (conforme bocal)",
    description: "Versão do Mini Aspersor Pingo 360 sem parafuso de regulagem do jato, mantendo a simplicidade operacional para quem não precisa ajustar o alcance manualmente.",
    image: IMG + "mini_pingo_360_sem_parafuso.jpg",
    diameters: [
      { size: "Bocal 2420E", price: 19.00 },
      { size: "Bocal 2424E", price: 19.00 },
      { size: "Bocal 2620E", price: 19.50 },
      { size: "Bocal 2624E", price: 19.50 },
      { size: "Bocal 2820E", price: 20.00 },
      { size: "Bocal 2824E", price: 20.00 },
      { size: "Bocal 3020E", price: 20.50 }
    ]
  },
  {
    id: 34,
    name: "Mini Aspersor TIGRE Pingo Setorial",
    category: "Aspersores TIGRE",
    material: "Termoplástico de engenharia aditivado contra raios UV",
    pressure: "15 a 40 m.c.a. (conforme bocal)",
    description: "Versão setorial do Mini Aspersor Pingo, indicada para regar apenas uma parte da área, como bordas de plantio, divisas de propriedade e margens de estradas.",
    image: IMG + "mini_pingo_setorial.jpg",
    diameters: [
      { size: "Bocal 3,0", price: 22.00 },
      { size: "Bocal 3,2", price: 22.50 },
      { size: "Bocal 3,4", price: 22.50 },
      { size: "Bocal 3,6", price: 23.00 },
      { size: "Bocal 3,8", price: 23.00 },
      { size: "Bocal 4,0", price: 23.50 }
    ]
  },
  {
    id: 35,
    name: "Aspersor TIGRE MIDI 360",
    category: "Aspersores TIGRE",
    material: "Termoplástico de engenharia aditivado contra raios UV",
    pressure: "20 a 40 m.c.a. (conforme bocal)",
    description: "Aspersor de impacto de médio porte, com maior alcance de jato que o Pingo, indicado para áreas maiores e diferentes tipos de solo e topografia.",
    image: IMG + "aspersor_midi_360.jpg",
    diameters: [
      { size: "3/4\" F 3626", price: 48.00 },
      { size: "1\" F 3626", price: 49.00 },
      { size: "3/4\" F 4028", price: 50.00 },
      { size: "1\" F 4028", price: 51.00 },
      { size: "3/4\" F 4432", price: 52.00 },
      { size: "1\" F 4432", price: 53.00 },
      { size: "3/4\" F 4832", price: 54.00 },
      { size: "1\" F 4832", price: 55.00 },
      { size: "1\" F 5232", price: 57.00 },
      { size: "3/4\" F 5632", price: 58.00 },
      { size: "1\" F 5632", price: 59.00 },
      { size: "3/4\" Sem Bocal", price: 44.00 },
      { size: "1\" F Sem Bocal", price: 45.00 }
    ]
  },
  {
    id: 36,
    name: "Aspersor TIGRE MIDI Setorial",
    category: "Aspersores TIGRE",
    material: "Termoplástico de engenharia aditivado contra raios UV",
    pressure: "20 a 40 m.c.a. (conforme bocal)",
    description: "Versão setorial do Aspersor MIDI, para regular o setor de irrigação em áreas que não necessitam de cobertura total de 360°.",
    image: IMG + "aspersor_midi_setorial.jpg",
    diameters: [
      { size: "3/4\" F 3,6", price: 50.00 },
      { size: "1\" F 3,6", price: 51.00 },
      { size: "1\" F 4,4", price: 52.00 },
      { size: "1\" F 5,2", price: 54.00 },
      { size: "1\" F 6,0", price: 56.00 },
      { size: "1\" F 7,2", price: 58.00 },
      { size: "3/4\" F Sem Bocal", price: 46.00 },
      { size: "1\" F Sem Bocal", price: 47.00 },
      { size: "3/4\" F 4,4", price: 52.00 },
      { size: "3/4\" F 7,2", price: 58.00 }
    ]
  },
  {
    id: 37,
    name: "Aspersor TIGRE ECO",
    category: "Aspersores TIGRE",
    material: "Termoplástico de engenharia aditivado contra raios UV",
    pressure: "25 a 45 m.c.a. (conforme bocal)",
    description: "Aspersor de impacto de maior porte da linha TIGRE, indicado para áreas extensas que exigem maior alcance e vazão de água.",
    image: IMG + "aspersor_eco.jpg",
    diameters: [
      { size: "Bocal 4028", price: 62.00 },
      { size: "Bocal 4230", price: 63.00 },
      { size: "Bocal 4432", price: 64.00 },
      { size: "Bocal 4832", price: 66.00 },
      { size: "Bocal 5232", price: 68.00 },
      { size: "Bocal 5632", price: 70.00 },
      { size: "Bocal 5836", price: 71.00 },
      { size: "Bocal 6432", price: 74.00 },
      { size: "Bocal 6640", price: 76.00 },
      { size: "Sem Bocal", price: 58.00 }
    ]
  },

  // ===================== ACESSÓRIOS PARA ASPERSÃO (7) =====================
  {
    id: 38,
    name: "Bocal TIGRE Pingo (avulso)",
    category: "Acessórios para Aspersão",
    material: "Termoplástico de engenharia",
    pressure: "—",
    description: "Bocal de reposição para o Mini Aspersor Pingo, disponível em diversas bitolas para ajuste fino da vazão de água.",
    image: IMG + "bocal_pingo.jpg",
    diameters: [
      { size: "Bitola 2,4mm", price: 3.20 },
      { size: "Bitola 2,6mm", price: 3.20 },
      { size: "Bitola 2,8mm", price: 3.30 },
      { size: "Bitola 3,0mm", price: 3.30 },
      { size: "Bitola 3,2mm", price: 3.40 },
      { size: "Bitola 3,4mm", price: 3.40 },
      { size: "Bitola 3,6mm", price: 3.50 },
      { size: "Bitola 3,8mm", price: 3.50 },
      { size: "Bitola 4,0mm", price: 3.60 },
      { size: "Tampão (bitola 4,0mm)", price: 2.80 }
    ]
  },
  {
    id: 39,
    name: "Bocal Aspersor TIGRE ECO/MIDI (avulso)",
    category: "Acessórios para Aspersão",
    material: "Termoplástico de engenharia",
    pressure: "—",
    description: "Bocal de reposição para os Aspersores MIDI e ECO, disponível em uma ampla faixa de bitolas para ajuste da vazão de água.",
    image: IMG + "bocal_eco_midi.jpg",
    diameters: [
      { size: "Bitola 2,8mm", price: 4.20 },
      { size: "Bitola 3,0mm", price: 4.20 },
      { size: "Bitola 3,2mm", price: 4.30 },
      { size: "Bitola 3,4mm", price: 4.30 },
      { size: "Bitola 3,6mm", price: 4.40 },
      { size: "Bitola 3,8mm", price: 4.40 },
      { size: "Bitola 4,0mm", price: 4.50 },
      { size: "Bitola 4,2mm", price: 4.50 },
      { size: "Bitola 4,4mm", price: 4.60 },
      { size: "Bitola 4,6mm", price: 4.60 },
      { size: "Bitola 4,8mm", price: 4.70 },
      { size: "Bitola 5,0mm", price: 4.70 },
      { size: "Bitola 5,2mm", price: 4.80 },
      { size: "Bitola 5,4mm", price: 4.80 },
      { size: "Bitola 5,6mm", price: 4.90 },
      { size: "Bitola 5,8mm", price: 4.90 },
      { size: "Bitola 6,0mm", price: 5.00 },
      { size: "Bitola 6,2mm", price: 5.00 },
      { size: "Bitola 6,4mm", price: 5.10 },
      { size: "Bitola 6,6mm", price: 5.10 },
      { size: "Bitola 6,8mm", price: 5.20 },
      { size: "Bitola 7,0mm", price: 5.20 },
      { size: "Bitola 7,2mm", price: 5.30 },
      { size: "Bitola 7,6mm", price: 5.40 },
      { size: "Bitola 8,0mm", price: 5.50 }
    ]
  },
  {
    id: 40,
    name: "Bocal Dispersor TIGRE Pingo/MIDI",
    category: "Acessórios para Aspersão",
    material: "Termoplástico de engenharia",
    pressure: "—",
    description: "Bocal dispersor que quebra o jato de água em gotas mais finas, utilizado nos modelos Pingo e MIDI para irrigação de áreas próximas.",
    image: IMG + "bocal_dispersor_pingo_midi.jpg",
    diameters: [
      { size: "Bitola 2,0mm", price: 5.50 },
      { size: "Bitola 2,4mm", price: 5.50 },
      { size: "Bitola 2,6mm", price: 5.60 },
      { size: "Bitola 2,8mm", price: 5.60 },
      { size: "Bitola 3,0mm", price: 5.70 },
      { size: "Bitola 3,2mm", price: 5.70 },
      { size: "Bitola 3,4mm", price: 5.80 },
      { size: "Bitola 3,6mm", price: 5.80 },
      { size: "Bitola 3,8mm", price: 5.90 },
      { size: "Bitola 4,0mm", price: 5.90 },
      { size: "Bitola 2,0E", price: 5.50 },
      { size: "Bitola 2,4E", price: 5.50 }
    ]
  },
  {
    id: 41,
    name: "Mecanismo Quebra Jato ECO/MIDI",
    category: "Acessórios para Aspersão",
    material: "Termoplástico de engenharia",
    pressure: "—",
    description: "Peça de reposição responsável por quebrar o jato d'água nos Aspersores ECO e MIDI, garantindo a distribuição uniforme da água.",
    image: IMG + "mecanismo_quebra_jato.jpg",
    diameters: [
      { size: "Unidade avulsa", price: 12.00 }
    ]
  },
  {
    id: 42,
    name: "Mecanismo de Reversão Pingo",
    category: "Acessórios para Aspersão",
    material: "Termoplástico e metal",
    pressure: "—",
    description: "Peça de reposição do mecanismo de reversão (vai-e-vem) do Mini Aspersor Pingo, responsável pelo movimento do braço de impacto.",
    image: IMG + "mecanismo_reversao_pingo.jpg",
    diameters: [
      { size: "Unidade avulsa", price: 18.00 }
    ]
  },
  {
    id: 43,
    name: "Mecanismo de Reversão MIDI",
    category: "Acessórios para Aspersão",
    material: "Termoplástico e metal",
    pressure: "—",
    description: "Peça de reposição do mecanismo de reversão (vai-e-vem) do Aspersor MIDI, responsável pelo movimento do braço de impacto.",
    image: IMG + "mecanismo_reversao_midi.jpg",
    diameters: [
      { size: "Unidade avulsa", price: 22.00 }
    ]
  },
  {
    id: 44,
    name: "Adaptador Aspersor Pingo",
    category: "Acessórios para Aspersão",
    material: "Termoplástico de engenharia",
    pressure: "—",
    description: "Adaptador utilizado para conectar o Aspersor Pingo a tubulações de diferentes bitolas, facilitando a instalação em redes já existentes.",
    image: IMG + "adaptador_aspersor_pingo.jpg",
    diameters: [
      { size: "1/2\" x 3/4\"", price: 4.50 },
      { size: "1/2\" x 1\"", price: 4.90 }
    ]
  },

  // ===================== LINHA SEMPREVERDE (2) =====================
  {
    id: 45,
    name: "SempreVerde Grama",
    category: "Linha SempreVerde",
    material: "Termoplástico de engenharia com componente em latão",
    pressure: "10 a 25 m.c.a.",
    description: "Aspersor estático (sem partes móveis) para irrigação de gramados e jardins, com bailarina exposta acima do nível do solo. Disponível nos ângulos de 90°, 180° e 360°.",
    image: IMG + "sempreverde_grama.jpg",
    diameters: [
      { size: "90°", price: 15.50 },
      { size: "180°", price: 16.00 },
      { size: "360°", price: 17.00 }
    ]
  },
  {
    id: 46,
    name: "SempreVerde Tubo",
    category: "Linha SempreVerde",
    material: "Termoplástico de engenharia com componente em latão",
    pressure: "10 a 25 m.c.a.",
    description: "Versão do SempreVerde para conexão direta em tubo enterrado, mantendo a bailarina rente ao solo. Disponível nos ângulos de 90°, 180° e 360°.",
    image: IMG + "sempreverde_tubo.jpg",
    diameters: [
      { size: "90°", price: 16.50 },
      { size: "180°", price: 17.00 },
      { size: "360°", price: 18.00 }
    ]
  }
];
