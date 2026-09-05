// Catálogo Tigre - Tubos e Conexões Irriga EP/ES (linha portátil de engate rápido) — 34 peças.
// Fonte de conteúdo (nome, imagem, descrição, categoria). Os preços aqui são o padrão de fábrica;
// podem ser sobrescritos pela planilha precos.csv sem precisar editar este arquivo.
const PRODUTOS_TIGRE_IRRIGA_EP_ES = [
  {
    id: 70,
    name: "Tubo Irriga EP",
    category: "Linha Portátil Irriga EP",
    material: "PVC com engate roscável plástico (EP)",
    pressure: "Uso portátil/semifixo",
    description: "Tubo de PVC com engate roscável plástico em uma das pontas, para montagem e desmontagem rápida sem ferramentas em sistemas de irrigação portáteis ou semifixos.",
    image: IMG + "tubo_irriga_ep.jpg",
    diameters: [
      { size: "2\" — barra 6m", price: 145.00 },
      { size: "3\" — barra 6m", price: 175.00 },
    ]
  },
  {
    id: 71,
    name: "Acoplamento Rápido Aspersor Irriga EP",
    category: "Linha Portátil Irriga EP",
    material: "PVC com engate roscável plástico (EP)",
    pressure: "Uso portátil/semifixo",
    description: "Peça de acoplamento rápido utilizada para instalar o aspersor diretamente na linha Irriga EP.",
    image: IMG + "acoplamento_rapido_aspersor_ep.jpg",
    diameters: [
      { size: "1\"", price: 38.00 },
    ]
  },
  {
    id: 72,
    name: "Adaptador Fêmea Irriga EP",
    category: "Linha Portátil Irriga EP",
    material: "PVC com engate roscável plástico (EP)",
    pressure: "Uso portátil/semifixo",
    description: "Adaptador com engate fêmea utilizado para transições de diâmetro na linha Irriga EP.",
    image: IMG + "adaptador_femea_ep.jpg",
    diameters: [
      { size: "2\"", price: 32.00 },
      { size: "2\" x 1.1/2\"", price: 36.00 },
      { size: "3\"", price: 42.00 },
      { size: "3\" x 2.1/2\"", price: 48.00 },
    ]
  },
  {
    id: 73,
    name: "Adaptador Macho Irriga EP",
    category: "Linha Portátil Irriga EP",
    material: "PVC com engate roscável plástico (EP)",
    pressure: "Uso portátil/semifixo",
    description: "Adaptador com engate macho utilizado para transições de diâmetro na linha Irriga EP.",
    image: IMG + "adaptador_macho_ep.jpg",
    diameters: [
      { size: "2\"", price: 30.00 },
      { size: "2\" x 1.1/2\"", price: 34.00 },
      { size: "3\"", price: 40.00 },
    ]
  },
  {
    id: 74,
    name: "Bucha de Redução para Saída Aspersor Irriga EP",
    category: "Linha Portátil Irriga EP",
    material: "PVC com engate roscável plástico (EP)",
    pressure: "Uso portátil/semifixo",
    description: "Bucha de redução utilizada na saída para aspersor, adaptando a rosca ao diâmetro do equipamento.",
    image: IMG + "bucha_reducao_saida_aspersor_ep.jpg",
    diameters: [
      { size: "1.1/2\" x 1\"", price: 18.00 },
    ]
  },
  {
    id: 75,
    name: "CAP Fêmea Irriga EP",
    category: "Linha Portátil Irriga EP",
    material: "PVC com engate roscável plástico (EP)",
    pressure: "Uso portátil/semifixo",
    description: "Tampão com engate fêmea utilizado para fechar a extremidade final da linha portátil.",
    image: IMG + "cap_femea_ep.jpg",
    diameters: [
      { size: "2\"", price: 42.00 },
      { size: "3\"", price: 55.00 },
    ]
  },
  {
    id: 76,
    name: "CAP Macho Irriga EP",
    category: "Linha Portátil Irriga EP",
    material: "PVC com engate roscável plástico (EP)",
    pressure: "Uso portátil/semifixo",
    description: "Tampão com engate macho utilizado para fechar a extremidade final da linha portátil.",
    image: IMG + "cap_macho_ep.jpg",
    diameters: [
      { size: "2\"", price: 38.00 },
      { size: "3\"", price: 50.00 },
    ]
  },
  {
    id: 77,
    name: "Curva 45° Irriga EP",
    category: "Linha Portátil Irriga EP",
    material: "PVC com engate roscável plástico (EP)",
    pressure: "Uso portátil/semifixo",
    description: "Curva de 45° com engate rápido, utilizada para mudanças suaves de direção na linha portátil.",
    image: IMG + "curva_45_ep.jpg",
    diameters: [
      { size: "2\"", price: 55.00 },
      { size: "3\"", price: 75.00 },
    ]
  },
  {
    id: 78,
    name: "Curva 90° Irriga EP",
    category: "Linha Portátil Irriga EP",
    material: "PVC com engate roscável plástico (EP)",
    pressure: "Uso portátil/semifixo",
    description: "Curva de 90° com engate rápido, utilizada para mudanças de direção na linha portátil.",
    image: IMG + "curva_90_ep.jpg",
    diameters: [
      { size: "2\"", price: 62.00 },
      { size: "3\"", price: 85.00 },
    ]
  },
  {
    id: 79,
    name: "Derivação Rosca Irriga EP",
    category: "Linha Portátil Irriga EP",
    material: "PVC com engate roscável plástico (EP)",
    pressure: "Uso portátil/semifixo",
    description: "Peça de derivação com saída roscada, utilizada para conectar um ramal secundário à linha principal portátil.",
    image: IMG + "derivacao_rosca_ep.jpg",
    diameters: [
      { size: "2\" x 2\"", price: 68.00 },
      { size: "3\" x 2\"", price: 85.00 },
    ]
  },
  {
    id: 80,
    name: "Derivação Saída Fêmea Irriga EP",
    category: "Linha Portátil Irriga EP",
    material: "PVC com engate roscável plástico (EP)",
    pressure: "Uso portátil/semifixo",
    description: "Peça de derivação com saída fêmea de engate rápido, para conectar um ramal ou aspersor à linha principal.",
    image: IMG + "derivacao_saida_femea_ep.jpg",
    diameters: [
      { size: "2\"", price: 72.00 },
      { size: "3\"", price: 95.00 },
      { size: "3\" x 2\"", price: 88.00 },
    ]
  },
  {
    id: 81,
    name: "Junta de Borracha Vedação Irriga EP/ES",
    category: "Linha Portátil Irriga EP/ES",
    material: "Borracha técnica",
    pressure: "—",
    description: "Anel de borracha utilizado para vedação nos engates rápidos das linhas Irriga EP e ES.",
    image: IMG + "junta_borracha_ep_es.jpg",
    diameters: [
      { size: "2\"", price: 8.00 },
      { size: "3\"", price: 11.00 },
      { size: "4\"", price: 15.00 },
    ]
  },
  {
    id: 82,
    name: "Ponta Fêmea Irriga EP",
    category: "Linha Portátil Irriga EP",
    material: "PVC com engate roscável plástico (EP)",
    pressure: "Uso portátil/semifixo",
    description: "Peça de ponta fêmea utilizada para montar trechos e reparos na linha portátil Irriga EP.",
    image: IMG + "ponta_femea_ep.jpg",
    diameters: [
      { size: "2\"", price: 35.00 },
      { size: "3\"", price: 45.00 },
    ]
  },
  {
    id: 83,
    name: "Ponta Macho Irriga EP",
    category: "Linha Portátil Irriga EP",
    material: "PVC com engate roscável plástico (EP)",
    pressure: "Uso portátil/semifixo",
    description: "Peça de ponta macho utilizada para montar trechos e reparos na linha portátil Irriga EP.",
    image: IMG + "ponta_macho_ep.jpg",
    diameters: [
      { size: "2\"", price: 32.00 },
      { size: "3\"", price: 42.00 },
    ]
  },
  {
    id: 84,
    name: "Redução Fêmea/Macho Irriga EP",
    category: "Linha Portátil Irriga EP",
    material: "PVC com engate roscável plástico (EP)",
    pressure: "Uso portátil/semifixo",
    description: "Peça de redução com engate fêmea de um lado e macho do outro, para transição de diâmetro na linha.",
    image: IMG + "reducao_femea_macho_ep.jpg",
    diameters: [
      { size: "3\" x 2\"", price: 48.00 },
    ]
  },
  {
    id: 85,
    name: "Saída Aspersor Irriga EP",
    category: "Linha Portátil Irriga EP",
    material: "PVC com engate roscável plástico (EP)",
    pressure: "Uso portátil/semifixo",
    description: "Peça em T com saída roscada para instalação do aspersor diretamente sobre a linha portátil.",
    image: IMG + "saida_aspersor_ep.jpg",
    diameters: [
      { size: "2\" x 3/4\"", price: 58.00 },
      { size: "2\" x 1\"", price: 62.00 },
      { size: "2\" x 1.1/2\"", price: 65.00 },
      { size: "3\" x 1\"", price: 72.00 },
      { size: "3\" x 1.1/2\"", price: 75.00 },
      { size: "3\" x 2.1/2\"", price: 85.00 },
      { size: "4\" x 1\"", price: 95.00 },
      { size: "4\" x 1.1/2\"", price: 98.00 },
      { size: "4\" x 2.1/2\"", price: 105.00 },
    ]
  },
  {
    id: 86,
    name: "Subida Aspersor Roscável Irriga EP",
    category: "Linha Portátil Irriga EP",
    material: "PVC rígido roscável",
    pressure: "Uso portátil/semifixo",
    description: "Tubo de subida roscável para elevar o aspersor a uma altura adequada acima da linha principal.",
    image: IMG + "subida_aspersor_roscavel_ep.jpg",
    diameters: [
      { size: "3/4\" — 0,5m", price: 28.00 },
      { size: "1\" — 0,5m", price: 32.00 },
      { size: "3/4\" — 1,0m", price: 42.00 },
      { size: "1\" — 1,0m", price: 48.00 },
    ]
  },
  {
    id: 87,
    name: "Válvula para Aspersor Irriga EP",
    category: "Linha Portátil Irriga EP",
    material: "PVC com engate roscável plástico (EP)",
    pressure: "Uso portátil/semifixo",
    description: "Válvula posicionada na subida do aspersor, permitindo o controle individual do ponto de irrigação.",
    image: IMG + "valvula_aspersor_ep.jpg",
    diameters: [
      { size: "1\"", price: 45.00 },
    ]
  },
  {
    id: 88,
    name: "Tubo Irriga ES Sem Engate",
    category: "Linha Portátil Irriga ES",
    material: "PVC com engate sela metálico (ES)",
    pressure: "Uso portátil/semifixo",
    description: "Tubo de PVC para a linha portátil com engate sela metálico, fixado por trava externa nas conexões.",
    image: IMG + "tubo_irriga_es.jpg",
    diameters: [
      { size: "2\" — barra 6m", price: 155.00 },
      { size: "3\" — barra 6m", price: 185.00 },
      { size: "4\" — barra 6m", price: 225.00 },
    ]
  },
  {
    id: 89,
    name: "Adaptador Fêmea Irriga ES",
    category: "Linha Portátil Irriga ES",
    material: "PVC com engate sela metálico (ES)",
    pressure: "Uso portátil/semifixo",
    description: "Adaptador com engate fêmea sela, utilizado para transições de diâmetro na linha Irriga ES.",
    image: IMG + "adaptador_femea_es.jpg",
    diameters: [
      { size: "2\"", price: 38.00 },
      { size: "3\"", price: 48.00 },
      { size: "4\"", price: 62.00 },
    ]
  },
  {
    id: 90,
    name: "Adaptador Macho Irriga ES",
    category: "Linha Portátil Irriga ES",
    material: "PVC com engate sela metálico (ES)",
    pressure: "Uso portátil/semifixo",
    description: "Adaptador com engate macho sela, utilizado para transições de diâmetro na linha Irriga ES.",
    image: IMG + "adaptador_macho_es.jpg",
    diameters: [
      { size: "2\"", price: 42.00 },
      { size: "3\"", price: 55.00 },
      { size: "4\"", price: 68.00 },
    ]
  },
  {
    id: 91,
    name: "Cap Fêmea Irriga ES",
    category: "Linha Portátil Irriga ES",
    material: "PVC com engate sela metálico (ES)",
    pressure: "Uso portátil/semifixo",
    description: "Tampão com engate fêmea sela, utilizado para fechar a extremidade final da linha portátil.",
    image: IMG + "cap_femea_es.jpg",
    diameters: [
      { size: "2\"", price: 45.00 },
      { size: "3\"", price: 58.00 },
      { size: "4\"", price: 72.00 },
    ]
  },
  {
    id: 92,
    name: "Cap Macho Irriga ES",
    category: "Linha Portátil Irriga ES",
    material: "PVC com engate sela metálico (ES)",
    pressure: "Uso portátil/semifixo",
    description: "Tampão com engate macho sela, utilizado para fechar a extremidade final da linha portátil.",
    image: IMG + "cap_macho_es.jpg",
    diameters: [
      { size: "2\"", price: 48.00 },
      { size: "3\"", price: 62.00 },
      { size: "4\"", price: 78.00 },
    ]
  },
  {
    id: 93,
    name: "Curva 45° Irriga ES",
    category: "Linha Portátil Irriga ES",
    material: "PVC com engate sela metálico (ES)",
    pressure: "Uso portátil/semifixo",
    description: "Curva de 45° com engate sela, utilizada para mudanças suaves de direção na linha portátil.",
    image: IMG + "curva_45_es.jpg",
    diameters: [
      { size: "2\"", price: 65.00 },
      { size: "3\"", price: 85.00 },
      { size: "4\"", price: 105.00 },
    ]
  },
  {
    id: 94,
    name: "Curva 90° Irriga ES",
    category: "Linha Portátil Irriga ES",
    material: "PVC com engate sela metálico (ES)",
    pressure: "Uso portátil/semifixo",
    description: "Curva de 90° com engate sela, utilizada para mudanças de direção na linha portátil.",
    image: IMG + "curva_90_es.jpg",
    diameters: [
      { size: "2\"", price: 72.00 },
      { size: "3\"", price: 95.00 },
      { size: "4\"", price: 118.00 },
    ]
  },
  {
    id: 95,
    name: "Derivação Rosca Irriga ES",
    category: "Linha Portátil Irriga ES",
    material: "PVC com engate sela metálico (ES)",
    pressure: "Uso portátil/semifixo",
    description: "Peça de derivação com saída roscada, utilizada para conectar um ramal secundário à linha principal portátil.",
    image: IMG + "derivacao_rosca_es.jpg",
    diameters: [
      { size: "3\" x 2\"", price: 88.00 },
      { size: "4\" x 2\"", price: 98.00 },
      { size: "4\" x 3\"", price: 105.00 },
    ]
  },
  {
    id: 96,
    name: "Derivação Saída Fêmea Irriga ES",
    category: "Linha Portátil Irriga ES",
    material: "PVC com engate sela metálico (ES)",
    pressure: "Uso portátil/semifixo",
    description: "Peça de derivação com saída fêmea sela, para conectar um ramal ou aspersor à linha principal.",
    image: IMG + "derivacao_saida_femea_es.jpg",
    diameters: [
      { size: "2\" x 2\"", price: 92.00 },
      { size: "3\" x 2\"", price: 102.00 },
      { size: "3\" x 3\"", price: 112.00 },
      { size: "4\" x 2\"", price: 115.00 },
      { size: "4\" x 3\"", price: 122.00 },
      { size: "4\" x 4\"", price: 135.00 },
    ]
  },
  {
    id: 97,
    name: "Engate Sela Metálico Irriga ES",
    category: "Linha Portátil Irriga ES",
    material: "Aço galvanizado",
    pressure: "Uso portátil/semifixo",
    description: "Trava metálica externa (engate sela) utilizada para unir e travar as conexões da linha Irriga ES.",
    image: IMG + "engate_sela_metalico_es.jpg",
    diameters: [
      { size: "2\"", price: 55.00 },
      { size: "3\"", price: 68.00 },
      { size: "4\"", price: 82.00 },
    ]
  },
  {
    id: 98,
    name: "Ponta Fêmea Irriga ES",
    category: "Linha Portátil Irriga ES",
    material: "PVC com engate sela metálico (ES)",
    pressure: "Uso portátil/semifixo",
    description: "Peça de ponta fêmea utilizada para montar trechos e reparos na linha portátil Irriga ES.",
    image: IMG + "ponta_femea_es.jpg",
    diameters: [
      { size: "2\"", price: 38.00 },
      { size: "3\"", price: 48.00 },
      { size: "4\"", price: 62.00 },
    ]
  },
  {
    id: 99,
    name: "Ponta Macho Irriga ES",
    category: "Linha Portátil Irriga ES",
    material: "PVC com engate sela metálico (ES)",
    pressure: "Uso portátil/semifixo",
    description: "Peça de ponta macho utilizada para montar trechos e reparos na linha portátil Irriga ES.",
    image: IMG + "ponta_macho_es.jpg",
    diameters: [
      { size: "2\"", price: 42.00 },
      { size: "3\"", price: 52.00 },
      { size: "4\"", price: 65.00 },
    ]
  },
  {
    id: 100,
    name: "Redução Macho/Fêmea Irriga ES",
    category: "Linha Portátil Irriga ES",
    material: "PVC com engate sela metálico (ES)",
    pressure: "Uso portátil/semifixo",
    description: "Peça de redução com engate macho de um lado e fêmea do outro, para transição de diâmetro na linha.",
    image: IMG + "reducao_macho_femea_es.jpg",
    diameters: [
      { size: "3\" x 2\"", price: 58.00 },
      { size: "4\" x 3\"", price: 72.00 },
    ]
  },
  {
    id: 101,
    name: "Saída Aspersor Irriga ES",
    category: "Linha Portátil Irriga ES",
    material: "PVC com engate sela metálico (ES)",
    pressure: "Uso portátil/semifixo",
    description: "Peça em T com saída roscada para instalação do aspersor diretamente sobre a linha portátil.",
    image: IMG + "saida_aspersor_es.jpg",
    diameters: [
      { size: "2\" x 3/4\"", price: 62.00 },
      { size: "2\" x 1\"", price: 68.00 },
      { size: "2\" x 1.1/2\"", price: 72.00 },
      { size: "3\" x 1\"", price: 78.00 },
      { size: "3\" x 1.1/2\"", price: 82.00 },
      { size: "3\" x 2.1/2\"", price: 88.00 },
      { size: "4\" x 1\"", price: 98.00 },
      { size: "4\" x 1.1/2\"", price: 105.00 },
    ]
  },
  {
    id: 102,
    name: "Transição Fêmea/Macho Irriga ES x EP",
    category: "Linha Portátil Irriga EP/ES",
    material: "PVC com engates sela (ES) e roscável (EP)",
    pressure: "Uso portátil/semifixo",
    description: "Peça de transição que permite conectar um trecho da linha Irriga ES a um trecho da linha Irriga EP.",
    image: IMG + "transicao_femea_macho_es_ep.jpg",
    diameters: [
      { size: "3\"", price: 65.00 },
    ]
  },
  {
    id: 103,
    name: "Transição Macho/Fêmea Irriga ES x EP",
    category: "Linha Portátil Irriga EP/ES",
    material: "PVC com engates sela (ES) e roscável (EP)",
    pressure: "Uso portátil/semifixo",
    description: "Peça de transição que permite conectar um trecho da linha Irriga EP a um trecho da linha Irriga ES.",
    image: IMG + "transicao_macho_femea_es_ep.jpg",
    diameters: [
      { size: "3\"", price: 68.00 },
    ]
  },
];
