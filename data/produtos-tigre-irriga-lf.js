// Catálogo Tigre - Tubos e Conexões Irriga LF (linha fixa soldável) — 23 peças.
// Fonte de conteúdo (nome, imagem, descrição, categoria). Os preços aqui são o padrão de fábrica;
// podem ser sobrescritos pela planilha precos.csv sem precisar editar este arquivo.
const PRODUTOS_TIGRE_IRRIGA_LF = [
  {
    id: 47,
    name: "Tubo Irriga LF PN 40 PBL",
    category: "Tubos e Conexões Irriga LF",
    material: "PVC rígido soldável (junta colada)",
    pressure: "40 m.c.a. (PN40)",
    description: "Tubo de PVC para linha fixa enterrada ou parcialmente exposta, com ponta bolsa lisa (PBL) para junta soldável. Indicado para sistemas de irrigação localizada e aspersão convencional semifixa.",
    image: IMG + "tubo_irriga_lf.jpg",
    diameters: [
      { size: "Bitola 35mm — barra 6m", price: 22.00 },
      { size: "Bitola 50mm — barra 6m", price: 32.00 },
      { size: "Bitola 75mm — barra 6m", price: 45.00 },
      { size: "Bitola 100mm — barra 6m", price: 62.00 },
      { size: "Bitola 125mm — barra 6m", price: 82.00 },
      { size: "Bitola 150mm — barra 6m", price: 112.00 },
    ]
  },
  {
    id: 48,
    name: "Tubo Irriga LF PN 60 PBL",
    category: "Tubos e Conexões Irriga LF",
    material: "PVC rígido soldável (junta colada)",
    pressure: "60 m.c.a. (PN60)",
    description: "Tubo de PVC para linha fixa, parede mais espessa que o PN40 para suportar maior pressão de trabalho. Indicado para adutoras e linhas principais de sistemas de irrigação.",
    image: IMG + "tubo_irriga_lf.jpg",
    diameters: [
      { size: "Bitola 35mm — barra 6m", price: 27.00 },
      { size: "Bitola 50mm — barra 6m", price: 39.00 },
      { size: "Bitola 75mm — barra 6m", price: 55.00 },
      { size: "Bitola 100mm — barra 6m", price: 76.00 },
      { size: "Bitola 125mm — barra 6m", price: 100.00 },
      { size: "Bitola 150mm — barra 6m", price: 137.00 },
    ]
  },
  {
    id: 49,
    name: "Tubo Irriga LF PN 80 PBL",
    category: "Tubos e Conexões Irriga LF",
    material: "PVC rígido soldável (junta colada)",
    pressure: "80 m.c.a. (PN80)",
    description: "Tubo de PVC de alta resistência para linha fixa, indicado para adutoras de sistemas de irrigação sob pressão elevada.",
    image: IMG + "tubo_irriga_lf.jpg",
    diameters: [
      { size: "Bitola 50mm — barra 6m", price: 48.00 },
      { size: "Bitola 75mm — barra 6m", price: 68.00 },
      { size: "Bitola 100mm — barra 6m", price: 94.00 },
      { size: "Bitola 150mm — barra 6m", price: 170.00 },
    ]
  },
  {
    id: 50,
    name: "Tubo Irriga LF PN 125 PBL",
    category: "Tubos e Conexões Irriga LF",
    material: "PVC rígido soldável (junta colada)",
    pressure: "125 m.c.a. (PN125)",
    description: "Tubo de PVC de altíssima resistência para linha fixa, indicado para trechos da adutora submetidos às maiores pressões do sistema.",
    image: IMG + "tubo_irriga_lf.jpg",
    diameters: [
      { size: "Bitola 50mm — barra 6m", price: 62.00 },
      { size: "Bitola 75mm — barra 6m", price: 88.00 },
      { size: "Bitola 100mm — barra 6m", price: 122.00 },
      { size: "Bitola 125mm — barra 6m", price: 158.00 },
      { size: "Bitola 150mm — barra 6m", price: 210.00 },
    ]
  },
  {
    id: 51,
    name: "Adaptador BS x PR Longo Irriga LF",
    category: "Tubos e Conexões Irriga LF",
    material: "PVC rígido soldável (junta colada)",
    pressure: "Compatível com a pressão do tubo utilizado",
    description: "Adaptador soldável com bolsa e rosca para conectar o tubo Irriga LF a peças e equipamentos roscados.",
    image: IMG + "adaptador_bs_pr_longo.jpg",
    diameters: [
      { size: "50mm x 1.1/2\"", price: 18.00 },
      { size: "75mm x 2.1/2\"", price: 32.00 },
    ]
  },
  {
    id: 52,
    name: "Adaptador BS x RM Curto Irriga LF",
    category: "Tubos e Conexões Irriga LF",
    material: "PVC rígido soldável (junta colada)",
    pressure: "Compatível com a pressão do tubo utilizado",
    description: "Adaptador soldável curto com bolsa e rosca macho, utilizado para pequenas transições de rosca na linha.",
    image: IMG + "adaptador_bs_rm_curto.jpg",
    diameters: [
      { size: "35mm x 1.1/2\"", price: 14.00 },
      { size: "50mm x 2\"", price: 19.00 },
      { size: "75mm x 3\"", price: 28.00 },
      { size: "100mm x 4\"", price: 42.00 },
      { size: "150mm x 6\"", price: 85.00 },
    ]
  },
  {
    id: 53,
    name: "Bucha de Redução Curta Irriga LF",
    category: "Tubos e Conexões Irriga LF",
    material: "PVC rígido soldável (junta colada)",
    pressure: "Compatível com a pressão do tubo utilizado",
    description: "Bucha utilizada para reduzir o diâmetro da tubulação em um mesmo trecho soldável.",
    image: IMG + "bucha_reducao_curta_lf.jpg",
    diameters: [
      { size: "50mm x 35mm", price: 9.00 },
      { size: "75mm x 50mm", price: 14.00 },
    ]
  },
  {
    id: 54,
    name: "CAP Soldável Irriga LF",
    category: "Tubos e Conexões Irriga LF",
    material: "PVC rígido soldável (junta colada)",
    pressure: "Compatível com a pressão do tubo utilizado",
    description: "Tampão soldável utilizado para fechar a extremidade final de um trecho de tubulação.",
    image: IMG + "cap_soldavel_lf.jpg",
    diameters: [
      { size: "35mm", price: 8.00 },
      { size: "50mm", price: 12.00 },
      { size: "75mm", price: 18.00 },
      { size: "100mm", price: 28.00 },
      { size: "125mm", price: 42.00 },
      { size: "150mm", price: 62.00 },
    ]
  },
  {
    id: 55,
    name: "Curva 45° PTA/BSA Soldável Irriga LF",
    category: "Tubos e Conexões Irriga LF",
    material: "PVC rígido soldável (junta colada)",
    pressure: "Compatível com a pressão do tubo utilizado",
    description: "Curva de 45° soldável (ponta x bolsa) utilizada para mudanças suaves de direção na tubulação.",
    image: IMG + "curva_45_pta_bsa_lf.jpg",
    diameters: [
      { size: "35mm", price: 14.00 },
      { size: "50mm", price: 19.00 },
      { size: "75mm", price: 28.00 },
      { size: "100mm", price: 42.00 },
      { size: "125mm", price: 68.00 },
      { size: "150mm", price: 95.00 },
    ]
  },
  {
    id: 56,
    name: "Curva 90° PTA/BSA Soldável Irriga LF",
    category: "Tubos e Conexões Irriga LF",
    material: "PVC rígido soldável (junta colada)",
    pressure: "Compatível com a pressão do tubo utilizado",
    description: "Curva de 90° soldável (ponta x bolsa) utilizada para mudanças de direção na tubulação.",
    image: IMG + "curva_90_pta_bsa_lf.jpg",
    diameters: [
      { size: "35mm", price: 15.00 },
      { size: "50mm", price: 21.00 },
      { size: "75mm", price: 30.00 },
      { size: "100mm", price: 45.00 },
      { size: "125mm", price: 72.00 },
      { size: "150mm", price: 102.00 },
    ]
  },
  {
    id: 57,
    name: "Luva de Correr Irriga LF PN 125",
    category: "Tubos e Conexões Irriga LF",
    material: "PVC rígido soldável (junta colada)",
    pressure: "125 m.c.a. (PN125)",
    description: "Luva de correr utilizada para unir dois tubos ou compensar pequenas variações de comprimento na instalação.",
    image: IMG + "luva_correr_lf_pn125.jpg",
    diameters: [
      { size: "50mm", price: 22.00 },
      { size: "75mm", price: 32.00 },
      { size: "100mm", price: 45.00 },
    ]
  },
  {
    id: 58,
    name: "Luva de Correr Irriga LF PN 80",
    category: "Tubos e Conexões Irriga LF",
    material: "PVC rígido soldável (junta colada)",
    pressure: "80 m.c.a. (PN80)",
    description: "Luva de correr utilizada para unir dois tubos ou compensar pequenas variações de comprimento na instalação.",
    image: IMG + "luva_correr_lf_pn80.jpg",
    diameters: [
      { size: "125mm", price: 48.00 },
      { size: "150mm", price: 62.00 },
    ]
  },
  {
    id: 59,
    name: "Luva Soldável Irriga LF",
    category: "Tubos e Conexões Irriga LF",
    material: "PVC rígido soldável (junta colada)",
    pressure: "Compatível com a pressão do tubo utilizado",
    description: "Luva soldável utilizada para unir dois trechos de tubo de mesmo diâmetro.",
    image: IMG + "luva_soldavel_lf.jpg",
    diameters: [
      { size: "35mm", price: 9.00 },
      { size: "50mm", price: 13.00 },
      { size: "75mm", price: 19.00 },
      { size: "100mm", price: 28.00 },
      { size: "125mm", price: 42.00 },
      { size: "150mm", price: 58.00 },
    ]
  },
  {
    id: 60,
    name: "Redução BSA Soldável Irriga LF PN 80",
    category: "Tubos e Conexões Irriga LF",
    material: "PVC rígido soldável (junta colada)",
    pressure: "80 m.c.a. (PN80)",
    description: "Redução soldável (bolsa x bolsa) utilizada para transição entre dois diâmetros diferentes de tubulação.",
    image: IMG + "reducao_bsa_lf_pn80.jpg",
    diameters: [
      { size: "50mm x 35mm", price: 12.00 },
      { size: "75mm x 50mm", price: 16.00 },
      { size: "100mm x 50mm", price: 19.00 },
      { size: "100mm x 75mm", price: 22.00 },
      { size: "125mm x 100mm", price: 32.00 },
      { size: "150mm x 100mm", price: 42.00 },
      { size: "150mm x 125mm", price: 48.00 },
    ]
  },
  {
    id: 61,
    name: "Redução BSA Soldável Irriga LF PN 125",
    category: "Tubos e Conexões Irriga LF",
    material: "PVC rígido soldável (junta colada)",
    pressure: "125 m.c.a. (PN125)",
    description: "Redução soldável (bolsa x bolsa), montada com reforço de fibra de vidro, para transição entre diâmetros na linha de maior pressão.",
    image: IMG + "reducao_bsa_lf_pn125.jpg",
    diameters: [
      { size: "75mm x 50mm", price: 22.00 },
      { size: "100mm x 50mm", price: 28.00 },
      { size: "100mm x 75mm", price: 32.00 },
    ]
  },
  {
    id: 62,
    name: "Tê Soldável Irriga LF",
    category: "Tubos e Conexões Irriga LF",
    material: "PVC rígido soldável (junta colada)",
    pressure: "Compatível com a pressão do tubo utilizado",
    description: "Conexão em Tê soldável utilizada para derivar uma linha secundária a partir da linha principal.",
    image: IMG + "te_soldavel_lf.jpg",
    diameters: [
      { size: "35mm", price: 16.00 },
      { size: "50mm", price: 24.00 },
      { size: "75mm", price: 36.00 },
      { size: "100mm", price: 55.00 },
      { size: "125mm*", price: 85.00 },
      { size: "150mm*", price: 115.00 },
    ]
  },
  {
    id: 63,
    name: "Tê com Rosca Derivação Irriga LF",
    category: "Tubos e Conexões Irriga LF",
    material: "PVC rígido soldável (junta colada)",
    pressure: "Compatível com a pressão do tubo utilizado",
    description: "Tê soldável com saída roscada central, utilizado para derivar uma linha secundária com conexão roscada.",
    image: IMG + "te_rosca_derivacao_lf.jpg",
    diameters: [
      { size: "35mm x 1\"", price: 18.00 },
      { size: "50mm x 3/4\"", price: 22.00 },
      { size: "50mm x 1\"", price: 24.00 },
      { size: "50mm x 1.1/2\"", price: 28.00 },
      { size: "75mm x 1.1/2\"", price: 38.00 },
      { size: "75mm x 2.1/2\"", price: 48.00 },
      { size: "100mm x 1.1/2\"", price: 58.00 },
    ]
  },
  {
    id: 64,
    name: "Tê BSA Soldável Irriga LF PN 125",
    category: "Tubos e Conexões Irriga LF",
    material: "PVC rígido soldável (junta colada)",
    pressure: "125 m.c.a. (PN125)",
    description: "Conexão em Tê soldável, montada com reforço de fibra de vidro, para derivações na linha de maior pressão.",
    image: IMG + "te_bsa_lf_pn125.jpg",
    diameters: [
      { size: "50mm", price: 45.00 },
      { size: "75mm", price: 62.00 },
      { size: "100mm", price: 85.00 },
    ]
  },
  {
    id: 65,
    name: "Tê de Redução BSA Soldável Irriga LF",
    category: "Tubos e Conexões Irriga LF",
    material: "PVC rígido soldável (junta colada)",
    pressure: "Compatível com a pressão do tubo utilizado",
    description: "Tê soldável com saída de diâmetro reduzido em relação à linha principal.",
    image: IMG + "te_reducao_bsa_lf.jpg",
    diameters: [
      { size: "75mm x 50mm", price: 26.00 },
      { size: "100mm x 50mm", price: 32.00 },
      { size: "100mm x 75mm", price: 36.00 },
      { size: "150mm x 100mm*", price: 78.00 },
      { size: "150mm x 125mm*", price: 92.00 },
    ]
  },
  {
    id: 66,
    name: "Tê de Redução BSA Soldável Irriga LF PN 125",
    category: "Tubos e Conexões Irriga LF",
    material: "PVC rígido soldável (junta colada)",
    pressure: "125 m.c.a. (PN125)",
    description: "Tê soldável de redução, montado com reforço de fibra de vidro, para a linha de maior pressão.",
    image: IMG + "te_reducao_bsa_lf_pn125.jpg",
    diameters: [
      { size: "75mm x 50mm", price: 48.00 },
      { size: "100mm x 50mm", price: 58.00 },
      { size: "100mm x 75mm", price: 68.00 },
    ]
  },
  {
    id: 67,
    name: "Junta de Borracha Vedação Irriga LF",
    category: "Tubos e Conexões Irriga LF",
    material: "Borracha técnica",
    pressure: "—",
    description: "Anel de borracha utilizado para vedação em conexões de encaixe da linha Irriga LF.",
    image: IMG + "junta_borracha_lf.jpg",
    diameters: [
      { size: "50mm", price: 6.00 },
      { size: "75mm", price: 8.00 },
      { size: "100mm", price: 11.00 },
      { size: "125mm", price: 14.00 },
      { size: "150mm", price: 18.00 },
    ]
  },
  {
    id: 68,
    name: "Registro de Esfera VS Soldável Irriga",
    category: "Tubos e Conexões Irriga LF",
    material: "Corpo em PVC com esfera e vedações internas",
    pressure: "Uso manual (aberto/fechado)",
    description: "Registro de esfera soldável utilizado para bloquear manualmente um trecho ou setor da tubulação.",
    image: IMG + "registro_esfera_vs_soldavel.jpg",
    diameters: [
      { size: "20mm", price: 22.00 },
      { size: "25mm", price: 26.00 },
      { size: "32mm", price: 32.00 },
      { size: "35mm", price: 36.00 },
      { size: "50mm", price: 48.00 },
      { size: "75mm", price: 78.00 },
    ]
  },
  {
    id: 69,
    name: "Registro de Esfera VS Roscável Irriga",
    category: "Tubos e Conexões Irriga LF",
    material: "Corpo em PVC com esfera e vedações internas",
    pressure: "Uso manual (aberto/fechado)",
    description: "Registro de esfera roscável utilizado para bloquear manualmente um trecho ou setor da tubulação em conexões roscadas.",
    image: IMG + "registro_esfera_vs_roscavel.jpg",
    diameters: [
      { size: "3/4\"", price: 35.00 },
      { size: "1\"", price: 45.00 },
      { size: "1.1/2\"", price: 68.00 },
      { size: "2\"", price: 98.00 },
    ]
  },
];
