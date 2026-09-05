// Catálogo AgroIrriga (inspirado no catálogo Petroisa) — 31 peças de gotejamento e microaspersão.
// Fonte de conteúdo (nome, imagem, descrição, categoria). Os preços aqui são o padrão de fábrica;
// podem ser sobrescritos pela planilha precos.csv sem precisar editar este arquivo.
const PRODUTOS_AGROIRRIGA = [
      // ===================== MANGUEIRAS GOTEJADORAS (4) =====================
      {
        id: 1,
        name: "Mangueira Gotejadora Jurussu",
        category: "Mangueiras Gotejadoras",
        material: "Polietileno (emissores planos), parede 150 mícras",
        pressure: "7 m.c.a.",
        description: "Indicada para áreas planas em culturas de ciclo curto. Não é recomendada a reinstalação — o descarte ao final do ciclo garante melhor produtividade e custo-benefício. Indicada para alface, agrião, cebola, cebolinha, espinafre, melão, nabo, rabanete, entre outras.",
        image: IMG + "jurussu.jpg",
        diameters: mangueiraVariants(55, [10, 15, 20, 30, 40, 50], ["1,0", "1,5", "2,6", "4,0"])
      },
      {
        id: 2,
        name: "Mangueira Gotejadora Tiquira",
        category: "Mangueiras Gotejadoras",
        material: "Polietileno (emissores planos), parede 200 mícras",
        pressure: "7 m.c.a.",
        description: "Indicada para áreas planas em culturas de ciclo curto e anual. Parede mais espessa que a Jurussu, oferecendo maior resistência. Indicada para alface, alho, beterraba, brócolis, cebola, cenoura, couve-flor, melancia, melão, entre outras.",
        image: IMG + "tiquira.jpg",
        diameters: mangueiraVariants(68, [10, 15, 20, 30, 40, 50, 99], ["1,0", "1,5", "2,6", "4,0"])
      },
      {
        id: 3,
        name: "Mangueira Gotejadora Manári",
        category: "Mangueiras Gotejadoras",
        material: "Polietileno (emissores planos), parede 250 mícras",
        pressure: "10 m.c.a.",
        description: "Indicada para áreas planas ou levemente inclinadas, em culturas de ciclo até bianual. Permite reinstalação, oferecendo ótimo custo-benefício. Indicada para ervas medicinais, morango, pepino, pimentão, tomate, entre outras.",
        image: IMG + "manari.jpg",
        diameters: mangueiraVariants(88, [10, 15, 20, 30, 40, 50, 99], ["1,0", "1,5", "2,6", "4,0"])
      },
      {
        id: 4,
        name: "Mangueira Gotejadora Amandi",
        category: "Mangueiras Gotejadoras",
        material: "Polietileno (emissores planos), parede 380 mícras",
        pressure: "15 m.c.a.",
        description: "Alta resistência mecânica e durabilidade, recomendada para vários tipos de terreno em culturas de ciclo médio. Permite várias reinstalações. Indicada para abacaxi, algodão, café, mamão, maracujá, milho verde, entre outras.",
        image: IMG + "amandi.jpg",
        diameters: mangueiraVariants(145, [15, 20, 30, 40, 50], ["1,0", "1,5", "2,6", "4,0"])
      },

      // ===================== MANGUEIRA DE POLIETILENO (1) =====================
      {
        id: 5,
        name: "Mangueira de Polietileno Durázio",
        category: "Mangueira de Polietileno",
        material: "PELBD com aditivo anti-UV",
        pressure: "30 m.c.a. (PN30)",
        description: "Fabricada em resina aditivada contra raios UV. Perfil oval nos diâmetros de 13mm a 20mm, ocupando menor volume e reduzindo custos logísticos; perfil cilíndrico em 26mm. Ideal para acoplar gotejadores, microaspersores e para transporte de água.",
        image: IMG + "durazio.jpg",
        diameters: [
          { size: "Diâmetro 13mm — bobina 200m", price: 42.00 },
          { size: "Diâmetro 13mm — bobina 600m", price: 118.00 },
          { size: "Diâmetro 16mm — bobina 100m", price: 26.00 },
          { size: "Diâmetro 16mm — bobina 500m", price: 122.00 },
          { size: "Diâmetro 20mm — bobina 200m", price: 64.00 },
          { size: "Diâmetro 26mm — bobina 100m", price: 40.00 }
        ]
      },

      // ===================== MICROASPERSORES (3) — preço por pacote =====================
      {
        id: 6,
        name: "Microaspersor Tinkó",
        category: "Microaspersores",
        material: "Corpo plástico técnico, bailarina para cima",
        pressure: "20 m.c.a. (teste)",
        description: "Projetado para irrigação eficiente e econômica, com instalação simples e distribuição uniforme de água. Vendido em pacotes de 200 unidades, em 10 opções de vazão (cores).",
        image: IMG + "tinko.jpg",
        diameters: [
          { size: "Preto — 40L/h a 20m.c.a (pacote 200un)", price: 68.00 },
          { size: "Verde-claro — 50L/h a 20m.c.a (pacote 200un)", price: 70.00 },
          { size: "Branco — 60L/h a 20m.c.a (pacote 200un)", price: 72.00 },
          { size: "Amarelo — 70L/h a 20m.c.a (pacote 200un)", price: 74.00 },
          { size: "Marrom — 80L/h a 20m.c.a (pacote 200un)", price: 76.00 },
          { size: "Roxo — 90L/h a 20m.c.a (pacote 200un)", price: 79.00 },
          { size: "Verde — 100L/h a 20m.c.a (pacote 200un)", price: 82.00 },
          { size: "Rosa — 110L/h a 20m.c.a (pacote 200un)", price: 85.00 },
          { size: "Laranja — 130L/h a 20m.c.a (pacote 200un)", price: 90.00 },
          { size: "Azul — 170L/h a 20m.c.a (pacote 200un)", price: 98.00 }
        ]
      },
      {
        id: 7,
        name: "Microaspersor Tuná (invertido)",
        category: "Microaspersores",
        material: "Corpo plástico técnico, bailarina para baixo",
        pressure: "20 m.c.a. (teste)",
        description: "Projetado exclusivamente para uso invertido, com a bailarina voltada para baixo, ideal para irrigações suspensas em pomares, vinhedos e estufas de hortaliças e flores.",
        image: IMG + "tuna.jpg",
        diameters: [
          { size: "Preto — 40L/h a 20m.c.a (pacote 200un)", price: 73.00 },
          { size: "Verde-claro — 50L/h a 20m.c.a (pacote 200un)", price: 76.00 },
          { size: "Branco — 60L/h a 20m.c.a (pacote 200un)", price: 78.00 },
          { size: "Amarelo — 70L/h a 20m.c.a (pacote 200un)", price: 80.00 },
          { size: "Marrom — 80L/h a 20m.c.a (pacote 200un)", price: 82.00 },
          { size: "Roxo — 90L/h a 20m.c.a (pacote 200un)", price: 85.00 },
          { size: "Verde — 100L/h a 20m.c.a (pacote 200un)", price: 89.00 },
          { size: "Rosa — 110L/h a 20m.c.a (pacote 200un)", price: 92.00 },
          { size: "Laranja — 130L/h a 20m.c.a (pacote 200un)", price: 97.00 },
          { size: "Azul — 170L/h a 20m.c.a (pacote 200un)", price: 106.00 }
        ]
      },
      {
        id: 8,
        name: "Microaspersor Itoman",
        category: "Microaspersores",
        material: "Corpo plástico técnico com tecnologia anti-inseto",
        pressure: "20 m.c.a. (teste)",
        description: "Equipado com tecnologia anti-inseto que previne o entupimento dos bocais, garantindo funcionamento contínuo. Indicado para abacate, avocado, banana, entre uma ampla gama de culturas.",
        image: IMG + "itoman.jpg",
        diameters: [
          { size: "Modelo A001 — 30L/h a 20m.c.a (pacote 200un)", price: 102.00 },
          { size: "Modelo A002 — 40L/h a 20m.c.a (pacote 200un)", price: 106.00 },
          { size: "Modelo A003 — 50L/h a 20m.c.a (pacote 200un)", price: 110.00 },
          { size: "Modelo A004 — 60L/h a 20m.c.a (pacote 200un)", price: 114.00 },
          { size: "Modelo A005 — 70L/h a 20m.c.a (pacote 200un)", price: 118.00 },
          { size: "Modelo A006 — 100L/h a 20m.c.a (pacote 200un)", price: 128.00 },
          { size: "Modelo A007 — 130L/h a 20m.c.a (pacote 200un)", price: 138.00 },
          { size: "Modelo A008 — 170L/h a 20m.c.a (pacote 200un)", price: 150.00 }
        ]
      },

      // ===================== ACESSÓRIOS PARA MICROASPERSÃO (3) =====================
      {
        id: 9,
        name: "Conector 4mm para Micro-tubo",
        category: "Acessórios para Microaspersão",
        material: "Polipropileno",
        pressure: "Até 2,5 Bar",
        description: "Conector utilizado para ligar o micro-tubo de 4mm ao corpo do microaspersor.",
        image: IMG + "conector4mm.jpg",
        diameters: [
          { size: "Pacote com 500un", price: 48.00 },
          { size: "Caixa com 5000un", price: 430.00 }
        ]
      },
      {
        id: 10,
        name: "Estaca para Microaspersor",
        category: "Acessórios para Microaspersão",
        material: "Plástico rígido resistente a UV",
        pressure: "—",
        description: "Estaca de fixação para sustentar o microaspersor a uma altura adequada do solo, evitando contato direto com terra e plantas.",
        image: IMG + "estacas.jpg",
        diameters: [
          { size: "30cm — pacote com 200un", price: 135.00 },
          { size: "60cm — pacote com 200un", price: 185.00 }
        ]
      },
      {
        id: 11,
        name: "Micro-tubo para Microaspersor",
        category: "Acessórios para Microaspersão",
        material: "PVC flexível",
        pressure: "Até 2,5 Bar",
        description: "Tubo flexível que conecta o microaspersor à linha lateral de irrigação, disponível já com conector acoplado ou em rolo para corte sob medida.",
        image: IMG + "microtubo.jpg",
        diameters: [
          { size: "60cm com conector — pacote 200un", price: 95.00 },
          { size: "100cm com conector — pacote 200un", price: 135.00 },
          { size: "4mm em rolo com 400m", price: 220.00 }
        ]
      },

      // ===================== EQUIPAMENTOS DE AFERIÇÃO (4) =====================
      {
        id: 12,
        name: "Manômetro com Glicerina",
        category: "Equipamentos de Aferição",
        material: "Caixa em aço inox, conexão em latão, líquido de glicerina",
        pressure: "Escalas de 20, 60 ou 100 m.c.a.",
        description: "Utilizado para aferir a pressão de trabalho do sistema de irrigação. A glicerina interna amortece as vibrações do ponteiro, prolongando a vida útil do instrumento.",
        image: IMG + "manometro.jpg",
        diameters: [
          { size: "Escala 20 m.c.a.", price: 36.00 },
          { size: "Escala 60 m.c.a.", price: 39.00 },
          { size: "Escala 100 m.c.a.", price: 45.00 }
        ]
      },
      {
        id: 13,
        name: "Flexível para Manômetro com Trava",
        category: "Equipamentos de Aferição",
        material: "Mangueira flexível com engate de trava rápida",
        pressure: "Uso em campo (aferição pontual)",
        description: "Permite acoplar rapidamente o manômetro em diferentes pontos de aferição da rede de irrigação, sem necessidade de ferramentas.",
        image: IMG + "flexivel_manometro.jpg",
        diameters: packVariants(24.00, 10, 20)
      },
      {
        id: 14,
        name: "Válvula para Checar Pressão",
        category: "Equipamentos de Aferição",
        material: "Corpo em latão/bronze",
        pressure: "Uso em campo (aferição pontual)",
        description: "Instalada em pontos estratégicos da tubulação para permitir a checagem periódica da pressão de trabalho do sistema.",
        image: IMG + "valvula_pressao.jpg",
        diameters: packVariants(15.00, 10, 100)
      },
      {
        id: 15,
        name: "Válvula para Checar Pressão no Final de Linha",
        category: "Equipamentos de Aferição",
        material: "Corpo plástico e latão",
        pressure: "Uso em campo (aferição pontual)",
        description: "Posicionada no final da linha lateral, permite conferir se a pressão mínima recomendada está sendo mantida até o último gotejador/microaspersor da linha.",
        image: IMG + "valvula_pressao_final.jpg",
        diameters: packVariants(19.00, 10, 100)
      },

      // ===================== CONEXÕES (12) =====================
      {
        id: 16,
        name: "Inicial com Porca (Passagem Reduzida/Plena)",
        category: "Conexões",
        material: "Polipropileno de alta resistência",
        pressure: "Uso em linha de baixa pressão",
        description: "Conecta a mangueira gotejadora à linha secundária, com porca de aperto para vedação. Disponível com passagem reduzida ou plena.",
        image: IMG + "inicial_porca.jpg",
        diameters: packVariants(1.20, 100, 600)
      },
      {
        id: 17,
        name: "Inicial com Redutor de Pressão com Porca",
        category: "Conexões",
        material: "Polipropileno de alta resistência",
        pressure: "Reduz e regula a pressão de entrada",
        description: "Conector inicial que já incorpora um redutor de pressão, protegendo a linha de gotejo contra excesso de pressão na entrada.",
        image: IMG + "inicial_porca_redutor.jpg",
        diameters: packVariants(2.80, 50, 200)
      },
      {
        id: 18,
        name: "União com Porca",
        category: "Conexões",
        material: "Polipropileno de alta resistência",
        pressure: "Uso em linha de baixa pressão",
        description: "Utilizada para unir dois trechos de mangueira gotejadora na mesma linha, com porca de aperto para vedação.",
        image: IMG + "uniao_porca.jpg",
        diameters: packVariants(1.50, 100, 400)
      },
      {
        id: 19,
        name: "Tampão Final com Porca",
        category: "Conexões",
        material: "Polipropileno de alta resistência",
        pressure: "Uso em linha de baixa pressão",
        description: "Fecha a extremidade final da linha de gotejo, com porca de aperto para vedação.",
        image: IMG + "tampao_porca.jpg",
        diameters: packVariants(1.10, 100, 600)
      },
      {
        id: 20,
        name: "Válvula de Descarga com Porca",
        category: "Conexões",
        material: "Polipropileno de alta resistência",
        pressure: "Uso em linha de baixa pressão",
        description: "Instalada na extremidade da linha para permitir a descarga periódica, auxiliando na limpeza do sistema de gotejamento.",
        image: IMG + "valvula_descarga_porca.jpg",
        diameters: packVariants(3.20, 50, 200)
      },
      {
        id: 21,
        name: "Inicial com Anel e Passagem Reduzida",
        category: "Conexões",
        material: "Polipropileno de alta resistência",
        pressure: "Uso em linha de baixa pressão",
        description: "Conecta a mangueira gotejadora à linha secundária utilizando sistema de anel vedante, com passagem reduzida.",
        image: IMG + "inicial_anel_reduzida.jpg",
        diameters: packVariants(0.90, 100, 600)
      },
      {
        id: 22,
        name: "Inicial com Anel e Passagem Plena",
        category: "Conexões",
        material: "Polipropileno de alta resistência",
        pressure: "Uso em linha de baixa pressão",
        description: "Conecta a mangueira gotejadora à linha secundária utilizando sistema de anel vedante, com passagem plena.",
        image: IMG + "inicial_anel_plena.jpg",
        diameters: packVariants(0.95, 100, 600)
      },
      {
        id: 23,
        name: "União com Anel",
        category: "Conexões",
        material: "Polipropileno de alta resistência",
        pressure: "Uso em linha de baixa pressão",
        description: "Utilizada para unir dois trechos de mangueira gotejadora, com vedação por sistema de anel.",
        image: IMG + "uniao_anel.jpg",
        diameters: packVariants(1.30, 100, 600)
      },
      {
        id: 24,
        name: "Inicial/União com Registro e Porca",
        category: "Conexões",
        material: "Corpo plástico com registro de esfera",
        pressure: "Permite bloqueio manual do setor",
        description: "Conector com registro integrado, permitindo abrir ou fechar manualmente o setor de irrigação. Disponível também com rosca de 1/2\" ou 3/4\" para conexão a tubulações.",
        image: IMG + "inicial_registro.jpg",
        diameters: packVariants(6.50, 50, 200)
      },
      {
        id: 25,
        name: "Inicial com Registro e Anel",
        category: "Conexões",
        material: "Corpo plástico com registro de esfera",
        pressure: "Permite bloqueio manual do setor",
        description: "Conector com registro integrado e vedação por anel, permitindo abrir ou fechar manualmente o setor. Disponível também com rosca de 1/2\" ou 3/4\".",
        image: IMG + "inicial_registro_anel.jpg",
        diameters: packVariants(6.80, 50, 200)
      },
      {
        id: 26,
        name: "Anel Vedante",
        category: "Conexões",
        material: "Borracha técnica",
        pressure: "—",
        description: "Anel de vedação utilizado nos conectores iniciais de passagem reduzida, plena ou com registro, garantindo estanqueidade na furação da linha.",
        image: IMG + "anel_vedante.jpg",
        diameters: packVariants(0.35, 100, 5000)
      },
      {
        id: 27,
        name: "Tampão para Anel Vedante",
        category: "Conexões",
        material: "Polipropileno",
        pressure: "—",
        description: "Utilizado para vedar furos não utilizados na linha, quando aplicado o sistema de anel vedante.",
        image: IMG + "tampao_anel_vedante.jpg",
        diameters: packVariants(0.55, 100, 5000)
      },

      // ===================== VÁLVULAS, FILTROS E INSTALAÇÃO (3) =====================
      {
        id: 28,
        name: "Válvula de Ar Cinética",
        category: "Válvulas, Filtros e Instalação",
        material: "Polipropileno técnico",
        pressure: "Uso em pontos altos da rede",
        description: "Expulsa o ar no enchimento da tubulação e admite ar durante a drenagem do sistema. Recomendada nos pontos mais altos da instalação, ou a cada 200m em redes de grande porte.",
        image: IMG + "valvula_ar_cinetica.jpg",
        diameters: [
          { size: "3/4\"", price: 27.00 },
          { size: "1\"", price: 32.00 }
        ]
      },
      {
        id: 29,
        name: "Filtro de Discos",
        category: "Válvulas, Filtros e Instalação",
        material: "Corpo plástico de engenharia, discos ranhurados 120 mesh",
        pressure: "Até 7 kgf/cm² (70 m.c.a.)",
        description: "Alta capacidade e eficiência de filtragem, essencial para proteger gotejadores e microaspersores contra entupimento por partículas sólidas.",
        image: IMG + "filtro_discos.jpg",
        diameters: [
          { size: "1.1/2\" — 15m³/h", price: 168.00 },
          { size: "2\" — 15m³/h", price: 198.00 }
        ]
      },
      {
        id: 30,
        name: "Broca Especial para Instalação",
        category: "Válvulas, Filtros e Instalação",
        material: "Liga de metal especial",
        pressure: "—",
        description: "Produzida em liga de metal especial que proporciona furação sem rebarbas e de alto rendimento, para instalação dos conectores nas linhas de irrigação. Recomenda-se o uso de furadeira elétrica.",
        image: IMG + "broca_especial.jpg",
        diameters: [
          { size: "14mm", price: 46.00 },
          { size: "17mm", price: 49.00 }
        ]
      },

      // ===================== INJETORES (1) =====================
      {
        id: 31,
        name: "Injetor Venturi",
        category: "Injetores",
        material: "Plástico resistente a produtos químicos",
        pressure: "Mínimo 20 m.c.a. na entrada",
        description: "Injeta fertilizantes líquidos e defensivos diretamente na rede de irrigação por sucção a vácuo (fertirrigação/quimigação). Disponível em 4 modelos para diferentes vazões de projeto.",
        image: IMG + "injetor_venturi.jpg",
        diameters: [
          { size: "3/4\" (Q: 1.131 L/h)", price: 98.00 },
          { size: "1\" (Q: 3.085 L/h)", price: 145.00 },
          { size: "1.1/2\" (Q: 5.813 L/h)", price: 265.00 },
          { size: "2\" (Q: 18.774 L/h)", price: 495.00 }
        ]
      }
];
