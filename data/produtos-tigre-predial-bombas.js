// Catálogo Tigre Predial — Registros e Válvulas para instalação de bombas — 9 peças.
// Selecionados a partir da seção "1.4 Registros e Válvulas" do Catálogo Predial da Tigre,
// mantendo apenas os itens usados em sucção/recalque de bombas (registros de bloqueio,
// válvulas de retenção e válvula de pé com crivo). Itens de uso doméstico/rede pública
// (registro de chuveiro, registro de passeio, registro de gaveta cromado) não foram incluídos.
// Fonte de conteúdo (nome, imagem, descrição, categoria). Os preços aqui são o padrão de fábrica;
// podem ser sobrescritos pela planilha precos.csv sem precisar editar este arquivo.
const PRODUTOS_TIGRE_PREDIAL_BOMBAS = [
  {
    id: 107,
    name: "Válvula de Pé com Crivo",
    category: "Registros e Válvulas para Bombas",
    material: "Corpo em PVC/latão com crivo (filtro) integrado",
    pressure: "Instalada na sucção da bomba",
    description: "Instalada na extremidade da tubulação de sucção, dentro da fonte de água. Evita a perda de escorva da bomba e impede a entrada de sólidos grossos através do crivo (filtro).",
    image: IMG + "valvula_pe_com_crivo.jpg",
    diameters: [
      { size: "3/4\"", price: 38.00 },
      { size: "1\"", price: 48.00 },
      { size: "1.1/4\"", price: 65.00 },
      { size: "1.1/2\"", price: 82.00 },
      { size: "2\"", price: 115.00 }
    ]
  },
  {
    id: 108,
    name: "Válvula de Retenção Soldável",
    category: "Registros e Válvulas para Bombas",
    material: "PVC soldável",
    pressure: "Instalada no recalque da bomba",
    description: "Instalada logo após a bomba, no recalque, permite o fluxo de água em apenas um sentido, evitando o retorno e o golpe de aríete quando a bomba é desligada.",
    image: IMG + "valvula_retencao_soldavel.jpg",
    diameters: [
      { size: "25mm", price: 28.00 },
      { size: "32mm", price: 35.00 },
      { size: "40mm", price: 48.00 },
      { size: "50mm", price: 65.00 },
      { size: "60mm", price: 85.00 }
    ]
  },
  {
    id: 109,
    name: "Válvula de Retenção Roscável",
    category: "Registros e Válvulas para Bombas",
    material: "PVC roscável",
    pressure: "Instalada no recalque da bomba",
    description: "Versão roscável da válvula de retenção, instalada no recalque da bomba para evitar o retorno de água e o golpe de aríete quando a bomba é desligada.",
    image: IMG + "valvula_retencao_roscavel.jpg",
    diameters: [
      { size: "3/4\"", price: 32.00 },
      { size: "1\"", price: 42.00 },
      { size: "1.1/4\"", price: 58.00 },
      { size: "1.1/2\"", price: 72.00 },
      { size: "2\"", price: 98.00 }
    ]
  },
  {
    id: 110,
    name: "Registro Esfera VS Soldável",
    category: "Registros e Válvulas para Bombas",
    material: "PVC soldável com esfera interna",
    pressure: "Uso manual (aberto/fechado)",
    description: "Registro de esfera soldável utilizado para bloquear manualmente a sucção ou o recalque da bomba, facilitando manutenções sem a necessidade de drenar todo o sistema.",
    image: IMG + "registro_esfera_vs_soldavel_predial.jpg",
    diameters: [
      { size: "20mm", price: 18.00 },
      { size: "25mm", price: 22.00 },
      { size: "32mm", price: 32.00 },
      { size: "40mm", price: 48.00 },
      { size: "50mm", price: 68.00 },
      { size: "60mm", price: 95.00 }
    ]
  },
  {
    id: 111,
    name: "Registro Esfera VS Roscável",
    category: "Registros e Válvulas para Bombas",
    material: "PVC roscável com esfera interna",
    pressure: "Uso manual (aberto/fechado)",
    description: "Versão roscável do registro de esfera, utilizado para bloquear manualmente a sucção ou o recalque da bomba em conexões roscadas.",
    image: IMG + "registro_esfera_vs_roscavel_predial.jpg",
    diameters: [
      { size: "1/2\"", price: 18.00 },
      { size: "3/4\"", price: 24.00 },
      { size: "1\"", price: 34.00 },
      { size: "1.1/4\"", price: 52.00 },
      { size: "1.1/2\"", price: 68.00 },
      { size: "2\"", price: 98.00 }
    ]
  },
  {
    id: 112,
    name: "Registro Esfera VS Compacto",
    category: "Registros e Válvulas para Bombas",
    material: "PVC soldável com esfera interna, corpo compacto",
    pressure: "Uso manual (aberto/fechado)",
    description: "Versão compacta do registro de esfera, indicada para instalações com pouco espaço, como casas de bomba pequenas ou quadros de distribuição.",
    image: IMG + "registro_esfera_vs_compacto.jpg",
    diameters: [
      { size: "20mm", price: 15.00 },
      { size: "25mm", price: 18.00 },
      { size: "32mm", price: 26.00 },
      { size: "40mm", price: 38.00 },
      { size: "50mm", price: 55.00 },
      { size: "60mm", price: 78.00 }
    ]
  },
  {
    id: 113,
    name: "Registro Esfera VS Duas Porcas",
    category: "Registros e Válvulas para Bombas",
    material: "PVC soldável com duas porcas de união",
    pressure: "Uso manual (aberto/fechado)",
    description: "Registro de esfera com união dos dois lados, permitindo a remoção completa da peça sem cortar a tubulação — útil para manutenção ou troca da bomba em linhas de maior diâmetro.",
    image: IMG + "registro_esfera_vs_duas_porcas.jpg",
    diameters: [
      { size: "75mm", price: 180.00 },
      { size: "85mm", price: 220.00 },
      { size: "110mm", price: 320.00 }
    ]
  },
  {
    id: 114,
    name: "Registro Esfera com Borboleta",
    category: "Registros e Válvulas para Bombas",
    material: "PVC soldável/roscável com alavanca tipo borboleta",
    pressure: "Uso manual (aberto/fechado)",
    description: "Registro de esfera com alavanca em formato de borboleta, de fácil acionamento, indicado para pequenas derivações e pontos de bloqueio próximos à bomba.",
    image: IMG + "registro_esfera_com_borboleta.jpg",
    diameters: [
      { size: "1/2\"", price: 16.00 },
      { size: "3/4\"", price: 20.00 }
    ]
  },
  {
    id: 115,
    name: "Adaptador para Caixa d'Água com Registro",
    category: "Registros e Válvulas para Bombas",
    material: "PVC com registro de esfera integrado",
    pressure: "Uso manual (aberto/fechado)",
    description: "Instalado na saída da caixa d'água ou reservatório, já com registro integrado para bloquear a sucção da bomba sem precisar esvaziar a caixa.",
    image: IMG + "adaptador_caixa_dagua_registro.jpg",
    diameters: [
      { size: "20mm", price: 24.00 },
      { size: "40mm", price: 42.00 },
      { size: "50mm", price: 58.00 }
    ]
  }
];
