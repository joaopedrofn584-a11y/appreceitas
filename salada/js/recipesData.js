// Base de dados completa de receitas interativas - SaladaFit App (Nutri Aurora Prado)
// Inclui receitas principais de Saladas no Pote, Molhos, Smoothies, Shots, Águas e a aba RECEITAS ADICIONAIS

const RECIPES_DATA = {
  saladas: [
    {
      id: "salada-refrescante",
      title: "Salada Refrescante Cítrica",
      sauce: "Molho Cítrico de Limão e Ervas",
      calories: 100,
      protein: "8g",
      carbs: "12g",
      fat: "3g",
      tags: ["Low Carb", "Vegetariana", "Detox"],
      preservation: 7,
      prepTime: "15 min",
      category: "saladas",
      image: "images/salada6.webp",
      description: "Uma combinação leve e crocante perfeita para dias quentes, mantendo o frescor por 7 dias no pote de vidro.",
      ingredients: [
        "2 colheres (sopa) de Molho Cítrico de Limão",
        "1/2 xícara de cenoura ralada fina",
        "1/2 xícara de pepino japonês em cubos",
        "1/3 xícara de grão-de-bico cozido",
        "2 colheres (sopa) de sementes de girassol",
        "1 xícara de alface crespa e rúcula secas"
      ],
      layers: [
        { level: 1, name: "Molho Cítrico de Limão e Ervas", type: "molho", desc: "No fundo do pote" },
        { level: 2, name: "Grão-de-bico + Cenoura ralada", type: "legumes", desc: "Absorve o tempero" },
        { level: 3, name: "Pepino em cubos", type: "legumes", desc: "Camada intermediária" },
        { level: 4, name: "Sementes de Girassol", type: "crocante", desc: "Crocância" },
        { level: 5, name: "Alface Crespa e Rúcula bem secas", type: "folhas", desc: "No topo, longe do molho" }
      ],
      prepSteps: [
        "Higienize todas as folhas e seque-as 100% com centrifugador de salada ou papel toalha.",
        "Coloque 2 colheres do Molho Cítrico no fundo do pote de vidro limpo e seco.",
        "Adicione o grão-de-bico cozido e a cenoura ralada por cima do molho.",
        "Insira a camada de pepino em cubos.",
        "Salpique as sementes de girassol.",
        "Preencha o restante do pote com as folhas secas, compactando suavemente.",
        "Feche hermeticamente e armazene na geladeira por até 7 dias."
      ]
    },
    {
      id: "salada-caprese",
      title: "Salada Caprese com Pesto Leve",
      sauce: "Pesto Funcional de Manjericão",
      calories: 120,
      protein: "10g",
      carbs: "6g",
      fat: "7g",
      tags: ["Low Carb", "Vegetariana"],
      preservation: 7,
      prepTime: "10 min",
      category: "saladas",
      image: "images/salada7.webp",
      description: "Clássico italiano adaptado para o pote, mantendo a muçarela de búfala e os tomates cereja incrivelmente suculentos.",
      ingredients: [
        "2 colheres (sopa) de Pesto Leve de Manjericão",
        "1/2 xícara de tomate cereja cortado ao meio",
        "80g de muçarela de búfala em bolinhas",
        "1 colher (sopa) de nozes picadas",
        "1.5 xícara de folhas de manjericão e alface roxa"
      ],
      layers: [
        { level: 1, name: "Pesto Funcional de Manjericão", type: "molho", desc: "No fundo" },
        { level: 2, name: "Tomates cereja cortados", type: "legumes", desc: "Suculência" },
        { level: 3, name: "Muçarela de Búfala em bolinhas", type: "proteina", desc: "Proteína leve" },
        { level: 4, name: "Nozes picadas", type: "crocante", desc: "Gorduras boas" },
        { level: 5, name: "Alface Roxa e Manjericão fresco", type: "folhas", desc: "Topo seco" }
      ],
      prepSteps: [
        "Seque bem as bolinhas de muçarela de búfala com papel toalha.",
        "Adicione o pesto de manjericão no fundo do pote de vidro.",
        "Disponha os tomates cereja cortados ao meio.",
        "Adicione a muçarela de búfala por cima dos tomates.",
        "Salpique as nozes picadas.",
        "Preencha até a borda com alface roxa e manjericão seco.",
        "Tampe hermeticamente e guarde no refrigerador."
      ]
    },
    {
      id: "salada-caesar",
      title: "Salada Caesar Fit Proteica",
      sauce: "Molho Original Caesar Leve (Iogurte & Alho)",
      calories: 145,
      protein: "22g",
      carbs: "5g",
      fat: "4g",
      tags: ["Proteica", "Low Carb"],
      preservation: 7,
      prepTime: "15 min",
      category: "saladas",
      image: "images/salada9.webp",
      description: "A queridinha do restaurante em uma versão saudável, rica em proteínas magras e sem maionese industrializada.",
      ingredients: [
        "2 colheres (sopa) de Molho Caesar Fit",
        "100g de peito de frango grelhado desfiado",
        "1/3 xícara de rabanete fatiado bem fino",
        "2 colheres (sopa) de queijo parmesão ralado na hora",
        "1.5 xícara de alface americana bem crocante"
      ],
      layers: [
        { level: 1, name: "Molho Caesar Fit à base de Iogurte", type: "molho", desc: "Fundo cremoso" },
        { level: 2, name: "Rabanete fatiado", type: "legumes", desc: "Base crocante" },
        { level: 3, name: "Peito de Frango desfiado temperado", type: "proteina", desc: "Carga proteica" },
        { level: 4, name: "Parmesão ralado", type: "crocante", desc: "Sabor marcante" },
        { level: 5, name: "Alface Americana picada seca", type: "folhas", desc: "Topo crocante" }
      ],
      prepSteps: [
        "Grelhe e desfie o frango previamente, deixando esfriar completamente.",
        "Despeje o Molho Caesar no fundo do pote.",
        "Adicione os rabanetes fatiados.",
        "Insira a camada generosa de frango desfiado.",
        "Salpique o queijo parmesão ralado.",
        "Preencha com a alface americana picada e totalmente seca.",
        "Conserve na geladeira até a hora de consumir."
      ]
    },
    {
      id: "salada-big-mac",
      title: "Salada Big Mac Fit",
      sauce: "Molho Especial Big Mac Fit",
      calories: 180,
      protein: "24g",
      carbs: "8g",
      fat: "6g",
      tags: ["Proteica"],
      preservation: 7,
      prepTime: "20 min",
      category: "saladas",
      image: "images/salada14.webp",
      description: "O sabor inconfundível do hambúrguer mais famoso em uma versão fit, proteica e super nutritiva.",
      ingredients: [
        "2 colheres (sopa) de Molho Especial (páprica, mostarda, picles)",
        "1/3 xícara de picles de pepino picadinho",
        "100g de patinho moído grelhado e escorrido",
        "2 colheres (sopa) de queijo cheddar leve ralado",
        "1.5 xícara de alface americana picadinha"
      ],
      layers: [
        { level: 1, name: "Molho Especial Big Mac Fit", type: "molho", desc: "Sabor autêntico" },
        { level: 2, name: "Picles de pepino + cebola roxa picada", type: "legumes", desc: "Acidez equilibrada" },
        { level: 3, name: "Carne moída magra (patinho) grelhada", type: "proteina", desc: "Alta proteína" },
        { level: 4, name: "Cheddar magro ralado", type: "crocante", desc: "Cremosidade" },
        { level: 5, name: "Alface Americana picadinha", type: "folhas", desc: "Frescor no topo" }
      ],
      prepSteps: [
        "Refogue o patinho moído com alho e sal, escorra bem toda a gordura e espere esfriar 100%.",
        "Adicione o Molho Especial no fundo do pote.",
        "Insira os picles e a cebola roxa picada.",
        "Adicione a carne moída já fria.",
        "Adicione o queijo cheddar ralado.",
        "Preencha com a alface americana picada e seca.",
        "Mantenha refrigerado."
      ]
    },
    {
      id: "salada-mediterranea",
      title: "Salada Mediterrânea com Queijo Feta",
      sauce: "Molho Agridoce de Laranja e Gengibre",
      calories: 125,
      protein: "9g",
      carbs: "10g",
      fat: "6g",
      tags: ["Vegetariana", "Detox"],
      preservation: 7,
      prepTime: "15 min",
      category: "saladas",
      image: "images/salada10.webp",
      description: "Rica em gorduras boas e antioxidantes, misturando azeitonas pretas, queijo feta e espinafre baby.",
      ingredients: [
        "2 colheres (sopa) de Molho Agridoce Cítrico",
        "1/2 xícara de pepino japonês com casca em cubos",
        "1/3 xícara de azeitonas pretas sem caroço",
        "50g de queijo feta ou ricota esfarelada",
        "1 colher (sopa) de sementes de abóbora",
        "1.5 xícara de espinafre e alface crespa"
      ],
      layers: [
        { level: 1, name: "Molho Agridoce de Laranja", type: "molho", desc: "Aroma cítrico" },
        { level: 2, name: "Pepino em cubos + Azeitonas pretas", type: "legumes", desc: "Textura firme" },
        { level: 3, name: "Queijo Feta ou Ricota temperada", type: "proteina", desc: "Sabor mediterrâneo" },
        { level: 4, name: "Sementes de Abóbora tostadas", type: "crocante", desc: "Minerais e zinco" },
        { level: 5, name: "Espinafre baby e Alface Crespa", type: "folhas", desc: "Folhas nobres" }
      ],
      prepSteps: [
        "Coloque o molho no fundo do pote de vidro.",
        "Adicione o pepino e as azeitonas pretas.",
        "Coloque o queijo feta esfarelado.",
        "Salpique as sementes de abóbora.",
        "Preencha com espinafre e alface secas.",
        "Tampe e armazene na geladeira por 7 dias."
      ]
    },
    {
      id: "salada-toscana",
      title: "Salada Toscana com Feijão Branco",
      sauce: "Molho Siciliano de Azeite & Ervas Finas",
      calories: 135,
      protein: "14g",
      carbs: "15g",
      fat: "3g",
      tags: ["Proteica", "Detox"],
      preservation: 7,
      prepTime: "15 min",
      category: "saladas",
      image: "images/salada11.webp",
      description: "Inspirada no norte da Itália, combina feijão branco cozido al dente, tomate seco e agrião fresco.",
      ingredients: [
        "2 colheres (sopa) de Molho Siciliano",
        "1/3 xícara de feijão branco cozido al dente",
        "1/4 xícara de tomate seco picado",
        "60g de lombo suíno assado desfiado ou frango",
        "1 colher (sopa) de gergelim preto",
        "1.5 xícara de agrião e alface americana"
      ],
      layers: [
        { level: 1, name: "Molho Siciliano com Limão Siciliano", type: "molho", desc: "Ervas e azeite" },
        { level: 2, name: "Feijão branco cozido + Tomate seco", type: "legumes", desc: "Fibras e sabor" },
        { level: 3, name: "Lombo suíno ou frango desfiado", type: "proteina", desc: "Proteína magra" },
        { level: 4, name: "Gergelim preto tostado", type: "crocante", desc: "Gorduras saudáveis" },
        { level: 5, name: "Agrião fresco e Alface", type: "folhas", desc: "Picância natural" }
      ],
      prepSteps: [
        "Certifique-se de que o feijão branco esteja bem frio e escorrido.",
        "Despeje o Molho Siciliano no fundo.",
        "Adicione o feijão branco e o tomate seco.",
        "Acrescente a proteína escolhida.",
        "Salpique o gergelim.",
        "Preencha com o agrião seco e alface.",
        "Refrigere até servir."
      ]
    },
    {
      id: "salada-rustica",
      title: "Salada Rústica Mostarda e Mel",
      sauce: "Molho Mostarda e Mel Funcional",
      calories: 160,
      protein: "11g",
      carbs: "14g",
      fat: "7g",
      tags: ["Vegetariana"],
      preservation: 7,
      prepTime: "15 min",
      category: "saladas",
      image: "images/salada1.webp",
      description: "Equilíbrio marcante entre o picante da mostarda Dijon e o adocicado do mel de abelhas puras.",
      ingredients: [
        "2 colheres (sopa) de Molho Mostarda e Mel",
        "1/2 xícara de beterraba ralada",
        "1/3 xícara de milho verde cozido",
        "1/2 xícara de ovos de codorna cozidos (cortados ao meio)",
        "2 colheres (sopa) de castanhas de caju picadas",
        "1.5 xícara de mix de folhas nobres"
      ],
      layers: [
        { level: 1, name: "Molho Mostarda e Mel Funcional", type: "molho", desc: "Agridoce" },
        { level: 2, name: "Beterraba ralada + Milho verde", type: "legumes", desc: "Cor e corantes naturais" },
        { level: 3, name: "Ovos de codorna cozidos", type: "proteina", desc: "Ovo proteico" },
        { level: 4, name: "Castanhas de caju picadas", type: "crocante", desc: "Crocância nobre" },
        { level: 5, name: "Mix de Folhas Nobres secas", type: "folhas", desc: "Base verde" }
      ],
      prepSteps: [
        "Cozinhe os ovos de codorna e deixe esfriar completamente.",
        "Adicione o Molho Mostarda e Mel no fundo do pote.",
        "Coloque a beterraba e o milho.",
        "Disponha os ovos de codorna cortados ao meio.",
        "Salpique as castanhas de caju.",
        "Insira as folhas nobres bem secas.",
        "Tampe bem e guarde no refrigerador."
      ]
    },
    {
      id: "salada-tropical",
      title: "Salada Tropical de Manga & Gergelim",
      sauce: "Molho de Maracujá com Azeite",
      calories: 110,
      protein: "7g",
      carbs: "14g",
      fat: "3g",
      tags: ["Low Carb", "Vegetariana", "Detox"],
      preservation: 7,
      prepTime: "12 min",
      category: "saladas",
      image: "images/salada3.webp",
      description: "Combinação agridoce e extremamente refrescante com cubos de manga frita e sementes de gergelim.",
      ingredients: [
        "2 colheres (sopa) de Molho de Maracujá",
        "1/2 xícara de manga tommy em cubos firmes",
        "1/3 xícara de cenoura em tiras",
        "60g de tofu temperado ou peito de peru em cubos",
        "1 colher (sopa) de gergelim branco e preto",
        "1.5 xícara de alface americana e rami"
      ],
      layers: [
        { level: 1, name: "Molho de Maracujá com Azeite", type: "molho", desc: "Frescor tropical" },
        { level: 2, name: "Manga em cubos + Cenoura", type: "legumes", desc: "Doce natural" },
        { level: 3, name: "Tofu grelhado ou Peito de Peru", type: "proteina", desc: "Proteína leve" },
        { level: 4, name: "Gergelim misto", type: "crocante", desc: "Toque asiático" },
        { level: 5, name: "Alface Americana seca", type: "folhas", desc: "Base neutra" }
      ],
      prepSteps: [
        "Corte a manga em cubos bem firmes para não soltar excesso de água.",
        "Despeje o Molho de Maracujá no pote.",
        "Adicione a manga e a cenoura.",
        "Coloque a fonte proteica escolhida.",
        "Salpique o gergelim.",
        "Preencha com a alface americana bem seca.",
        "Conserve sob refrigeração."
      ]
    }
  ],

  molhos: [
    {
      id: "molho-citrico",
      title: "Molho Cítrico de Limão e Ervas",
      calories: 35,
      yield: "4 porções",
      prepTime: "5 min",
      category: "molhos",
      tags: ["Detox", "Low Carb"],
      image: "images/salada4.webp",
      description: "O segredo para saladas leves e digestivas. Mantém as propriedades ativas por 10 dias.",
      ingredients: [
        "4 colheres (sopa) de azeite de oliva extra virgem",
        "Suco de 1 limão siciliano ou taiti",
        "1 colher (chá) de orégano seco",
        "1 colher (chá) de salsinha bem picadinha",
        "1 pitada de sal marinho ou sal rosa",
        "Pimenta do reino moída na hora a gosto"
      ],
      prepSteps: [
        "Em um frasco pequeno ou bowl, misture o suco de limão com o sal até dissolver.",
        "Adicione o azeite em fio, batendo com um garfo ou fouet para emulsionar.",
        "Adicione as ervas picadas e a pimenta do reino.",
        "Misture bem e utilize como base das suas saladas no pote."
      ]
    },
    {
      id: "molho-caesar-fit",
      title: "Molho Caesar Fit de Iogurte",
      calories: 42,
      yield: "4 porções",
      prepTime: "5 min",
      category: "molhos",
      tags: ["Proteica", "Low Carb"],
      image: "images/salada4.webp",
      description: "Versão saudável sem maionese e sem ovos crus. Cremoso, saboroso e rico em proteínas.",
      ingredients: [
        "1 pote (170g) de iogurte natural desnatado ou grego zero",
        "1 colher (sopa) de azeite de oliva",
        "1 dente de alho pequeno bem amassado ou ralado",
        "1 colher (chá) de mostarda dijon",
        "1 colher (sopa) de suco de limão",
        "2 colheres (sopa) de parmesão ralado fino",
        "Sal e pimenta a gosto"
      ],
      prepSteps: [
        "Em um recipiente, misture o iogurte natural com o azeite e o limão.",
        "Incorpore o alho ralado e a mostarda dijon.",
        "Adicione o queijo parmesão e tempere com sal e pimenta.",
        "Bata até obter um creme homogêneo e aveludado."
      ]
    },
    {
      id: "molho-big-mac",
      title: "Molho Especial Big Mac Fit",
      calories: 48,
      yield: "5 porções",
      prepTime: "5 min",
      category: "molhos",
      tags: ["Low Carb"],
      image: "images/salada4.webp",
      description: "Reprodução perfeita do famoso molho especial com ingredientes naturais e de baixa caloria.",
      ingredients: [
        "3 colheres (sopa) de creme de ricota leve ou iogurte grego",
        "1 colher (sopa) de ketchup zero açúcar",
        "1 colher (chá) de mostarda amarela",
        "1 colher (sopa) de picles de pepino finamente picado",
        "1/2 colher (chá) de páprica doce ou defumada",
        "1 colher (chá) de vinagre de maçã",
        "Pitada de alho e cebola em pó"
      ],
      prepSteps: [
        "Misture a base de creme de ricota com o ketchup zero e a mostarda.",
        "Adicione o picles picadinho e o vinagre de maçã.",
        "Tempere com páprica, alho em pó, cebola em pó e sal.",
        "Misture muito bem até ficar uniforme."
      ]
    },
    {
      id: "molho-mostarda-mel",
      title: "Molho Mostarda e Mel Funcional",
      calories: 45,
      yield: "4 porções",
      prepTime: "5 min",
      category: "molhos",
      tags: ["Vegetariana"],
      image: "images/salada4.webp",
      description: "Combinação clássica irresistível, ajustada nutricionalmente para manter o equilíbrio glicêmico.",
      ingredients: [
        "2 colheres (sopa) de mostarda amarela ou dijon",
        "1 colher (sopa) de mel puro de abelhas",
        "2 colheres (sopa) de azeite de oliva extra virgem",
        "1 colher (sopa) de suco de limão",
        "Pitada de sal marinho"
      ],
      prepSteps: [
        "Junte a mostarda e o mel em um bowl pequeno.",
        "Adicione o suco de limão e o sal.",
        "Acrescente o azeite aos poucos mexendo energicamente até ficar cremoso."
      ]
    }
  ],

  smoothies: [
    {
      id: "smoothie-verde",
      title: "Smoothie Detox Verde Energizante",
      calories: 85,
      prepTime: "5 min",
      category: "smoothies",
      tags: ["Detox", "Vegetariana", "Low Carb"],
      image: "images/salada15.webp",
      description: "Elimina toxinas, melhora a digestão e fornece energia limpa sem picos de glicemia.",
      ingredients: [
        "1 folha de couve manteiga sem o talo",
        "1/2 maçã verde com casca",
        "1/2 pepino japonês picado",
        "Suco de 1 limão",
        "200ml de água de coco gelada",
        "1 pedacinho pequeno de gengibre (1cm)"
      ],
      prepSteps: [
        "Lave bem todos os ingredientes.",
        "Bata tudo no liquidificador por 2 minutos até ficar completamente homogêneo.",
        "Consuma imediatamente sem coar para aproveitar todas as fibras detox."
      ]
    },
    {
      id: "smoothie-vermelho",
      title: "Smoothie Vermelho Antioxidante",
      calories: 95,
      prepTime: "5 min",
      category: "smoothies",
      tags: ["Detox", "Vegetariana"],
      image: "images/salada15.webp",
      description: "Rico em antocianinas, combate o envelhecimento celular e estimula a circulação.",
      ingredients: [
        "1/2 xícara de morangos congelados",
        "1/4 xícara de mirtilos ou framboesas",
        "1/2 beterraba pequena crua ralada",
        "200ml de água de coco",
        "1 colher (sopa) de sementes de chia"
      ],
      prepSteps: [
        "Adicione a água de coco e a chia no liquidificador e aguarde 2 minutos.",
        "Acrescente as frutas congeladas e a beterraba ralada.",
        "Bata até obter um creme consistente e aveludado."
      ]
    },
    {
      id: "smoothie-amarelo",
      title: "Smoothie Amarelo Digestivo",
      calories: 90,
      prepTime: "5 min",
      category: "smoothies",
      tags: ["Detox", "Vegetariana"],
      image: "images/salada15.webp",
      description: "Com bromelina do abacaxi, reduz o inchaço abdominal e ativa o metabolismo.",
      ingredients: [
        "2 fatias de abacaxi maduro",
        "1/2 colher (chá) de cúrcuma em pó",
        "5 folhas de hortelã fresca",
        "200ml de água bem gelada",
        "1 colher (chá) de sementes de linhaça dourada"
      ],
      prepSteps: [
        "Bata o abacaxi com a água e a hortelã no liquidificador.",
        "Adicione a cúrcuma e a linhaça.",
        "Bata novamente e sirva com pedras de gelo."
      ]
    }
  ],

  shots: [
    {
      id: "shot-imunidade",
      title: "Shot Imunidade com Cúrcuma & Própolis",
      calories: 15,
      prepTime: "2 min",
      category: "shots",
      tags: ["Detox", "Low Carb"],
      image: "images/salada5.webp",
      description: "Tomar em jejum para fortalecer a imunidade e acelerar a recuperação celular.",
      ingredients: [
        "Suco de 1/2 limão espremido na hora",
        "1 colher (chá) de cúrcuma pura",
        "15 gotas de extrato de própolis verde",
        "1 pitada de pimenta preta",
        "30ml de água morna"
      ],
      prepSteps: [
        "Misture o suco de limão com a água em um copinho de shot.",
        "Adicione a cúrcuma, a pimenta preta e as gotas de própolis.",
        "Misture bem com uma colher pequena e tome em jejum pela manhã."
      ]
    },
    {
      id: "shot-antiinflamatorio",
      title: "Shot Anti-inflamatório de Gengibre",
      calories: 12,
      prepTime: "2 min",
      category: "shots",
      tags: ["Detox", "Low Carb"],
      image: "images/salada5.webp",
      description: "Potente ação termogênica e anti-inflamatória para começar o dia com vitalidade.",
      ingredients: [
        "1 colher (chá) de suco de gengibre espremido",
        "Suco de 1/2 limão",
        "1 colher (chá) de vinagre de maçã orgânico",
        "1 pitada de canela em pó",
        "30ml de água"
      ],
      prepSteps: [
        "Junte todos os ingredientes no copinho de shot.",
        "Misture bem e tome logo após acordar."
      ]
    }
  ],

  aguas: [
    {
      id: "agua-pepino-hortela",
      title: "Água Saborizada Drenante Pepino & Hortelã",
      calories: 5,
      prepTime: "5 min",
      category: "aguas",
      tags: ["Detox", "Low Carb"],
      image: "images/salada8.webp",
      description: "Estimula a ingestão de água ao longo do dia com efeito levemente diurético.",
      ingredients: [
        "1 litro de água filtrada bem gelada",
        "1/2 pepino japonês fatiado em rodelas finas",
        "1/2 limão siciliano fatiado",
        "8 ramos de hortelã fresca",
        "Pedras de gelo a gosto"
      ],
      prepSteps: [
        "Em uma jarra de vidro, coloque as rodelas de pepino e limão.",
        "Amasse levemente as folhas de hortelã para liberar aromas.",
        "Adicione a água gelada e o gelo.",
        "Deixe em infusão na geladeira por 30 minutos antes de consumir."
      ]
    },
    {
      id: "agua-morango-manjericao",
      title: "Água Saborizada Morango & Manjericão",
      calories: 8,
      prepTime: "5 min",
      category: "aguas",
      tags: ["Detox", "Vegetariana"],
      image: "images/salada8.webp",
      description: "Aroma fascinante e sabor delicado que transforma o hábito de beber água em um prazer diário.",
      ingredients: [
        "1 litro de água mineral gelada",
        "5 morangos frescos cortados ao meio",
        "4 ramos de manjericão fresco",
        "1/2 limão taiti em fatias",
        "Gelo a gosto"
      ],
      prepSteps: [
        "Coloque os morangos e o limão na jarra.",
        "Adicione o manjericão levemente torcido.",
        "Complete com água e gelo.",
        "Mantenha refrigerado."
      ]
    }
  ],

  // --- NOVA ABA SOLICITADA PELO USUÁRIO: RECEITAS ADICIONAIS ---
  adicionais: [
    {
      id: "marmita-fit-escondidinho",
      title: "Escondidinho Fit de Patinho com Mandioquinha",
      subCategory: "50 Marmitas Fit",
      calories: 220,
      protein: "26g",
      carbs: "18g",
      fat: "4g",
      tags: ["Proteica", "Marmita Fit"],
      prepTime: "25 min",
      category: "adicionais",
      image: "images/salada14.webp",
      description: "Coleção 50 Marmitas FIT: Prática, saborosa e pronta para congelar. Sua alimentação no piloto automático durante a semana inteira.",
      ingredients: [
        "120g de patinho moído temperado com alho e cebola",
        "100g de mandioquinha cozida e amassada",
        "1 colher (sopa) de requeijão leve ou cottage",
        "Páprica doce e salsinha picada a gosto"
      ],
      prepSteps: [
        "Cozinhe a mandioquinha até ficar bem macia e amasse formando um purê aveludado.",
        "Refogue o patinho moído magro com alho, sal e páprica até dourar.",
        "Em um recipiente próprio para congelamento, faça uma camada do purê no fundo.",
        "Adicione a carne moída temperada e cubra com o restante do purê.",
        "Finalize com salsinha e leve ao freezer por até 30 dias. Aqueça por 4 min no micro-ondas!"
      ]
    },
    {
      id: "sopa-creme-abobora-gengibre",
      title: "Sopa Creme de Abóbora com Gengibre Emagrecedora",
      subCategory: "60 Sopas Derrete Gordura",
      calories: 95,
      protein: "4g",
      carbs: "14g",
      fat: "2g",
      tags: ["Detox", "Low Carb", "Sopas"],
      prepTime: "20 min",
      category: "adicionais",
      image: "images/salada10.webp",
      description: "Coleção 60 Sopas Que Derretem Gordura: Pronta em até 30 minutos. Sacia, aquece e acelera a queima calórica noturna.",
      ingredients: [
        "300g de abóbora cabotiá picada em cubos",
        "1 colher (chá) de gengibre ralado fresco",
        "1/2 cebola e 2 dentes de alho picados",
        "500ml de caldo caseiro de legumes",
        "1 colher (chá) de azeite de oliva e sal rosa"
      ],
      prepSteps: [
        "Refogue o alho, a cebola e o gengibre no azeite até soltar aroma.",
        "Adicione a abóbora cabotiá em cubos e o caldo de legumes bem quente.",
        "Cozinhe em fogo médio por 20 minutos até a abóbora ficar macia.",
        "Bata no liquidificador até obter um creme sedoso.",
        "Sirva bem quentinha ou congele em porções individuais para o jantar."
      ]
    },
    {
      id: "mounjaro-caseiro-elixir",
      title: "Mounjaro Caseiro: Elixir Sacietógeno de Psyllium & Limão",
      subCategory: "Mounjaro Caseiro Natural",
      calories: 18,
      protein: "1g",
      carbs: "3g",
      fat: "0g",
      tags: ["Detox", "Low Carb", "Corta Fome"],
      prepTime: "3 min",
      category: "adicionais",
      image: "images/salada5.webp",
      description: "Coleção Mounjaro Caseiro Natural: Efeito sacietógeno natural com ingredientes do mercado. Corta fome, controla compulsão por doces e reduz o apetite.",
      ingredients: [
        "1 colher (sopa) de Psyllium em pó puro",
        "Suco de 1/2 limão espremido",
        "1 colher (chá) de vinagre de maçã orgânico",
        "250ml de água morna ou em temperatura ambiente",
        "1 pitada de canela em pó"
      ],
      prepSteps: [
        "Coloque a água em um copo grande.",
        "Adicione o psyllium em pó, o suco de limão e o vinagre de maçã.",
        "Misture energicamente com uma colher e tome imediatamente antes que engrosse.",
        "Tome 20 a 30 minutos antes das refeições principais para formar um gel expansivo no estômago e cortar a fome excessiva."
      ]
    },
    {
      id: "cafe-pao-de-queijo-fit",
      title: "Pão de Queijo Fit de Frigideira (Pronto em 5 Min)",
      subCategory: "200 Cafés Sem Engordar",
      calories: 130,
      protein: "12g",
      carbs: "8g",
      fat: "5g",
      tags: ["Proteica", "Café Sem Engordar"],
      prepTime: "5 min",
      category: "adicionais",
      image: "images/salada1.webp",
      description: "Coleção 200 Cafés Sem Engordar: Receita deliciosa para café da manhã ou lanche que sacia, nutre e acelera o emagrecimento sem sabotar.",
      ingredients: [
        "1 ovo inteiro",
        "1 colher (sopa) cheia de goma de tapioca ou polvilho azedo",
        "1 colher (sopa) de cottage ou creme de ricota leve",
        "1 colher (sopa) de queijo parmesão ralado",
        "1 pitada de sal"
      ],
      prepSteps: [
        "Em um bowl pequeno, bata o ovo com um garfo.",
        "Adicione a goma de tapioca, o cottage e o parmesão ralado. Misture bem.",
        "Despeje em uma frigideira antiaderente levemente untada em fogo baixo.",
        "Deixe dourar por 2 minutos de cada lado até ficar bem crocante.",
        "Sirva quentinho com café preto ou chá verde."
      ]
    },
    {
      id: "sopa-detox-abobrinha",
      title: "Sopa Detox Verde de Abobrinha & Salsão",
      subCategory: "60 Sopas Derrete Gordura",
      calories: 70,
      protein: "3g",
      carbs: "9g",
      fat: "1.5g",
      tags: ["Detox", "Low Carb", "Sopas"],
      prepTime: "15 min",
      category: "adicionais",
      image: "images/salada15.webp",
      description: "Sopa leve, diurética e rica em potássio para eliminar a retenção de líquidos de um dia para o outro.",
      ingredients: [
        "2 abobrinhas verdes médias fatiadas",
        "2 talos de salsão picados",
        "1/2 maço de espinafre fresco",
        "1/2 cebola e alho a gosto",
        "400ml de água ou caldo vegetal"
      ],
      prepSteps: [
        "Refogue o alho e a cebola no azeite.",
        "Acrescente a abobrinha e o salsão picados.",
        "Adicione a água e cozinhe por 15 minutos.",
        "Desligue o fogo, acrescente o espinafre cru e bata tudo no mixer.",
        "Consuma quente no jantar para derreter gordura."
      ]
    },
    {
      id: "cafe-crepioca-proteica",
      title: "Crepioca Crocante Recheada com Frango",
      subCategory: "200 Cafés Sem Engordar",
      calories: 175,
      protein: "22g",
      carbs: "9g",
      fat: "4g",
      tags: ["Proteica", "Café Sem Engordar"],
      prepTime: "8 min",
      category: "adicionais",
      image: "images/salada2.webp",
      description: "Excelente opção pós-treino ou café reforçado para manter a saciedade e os músculos alimentados até o almoço.",
      ingredients: [
        "1 ovo + 1 clara",
        "1 colher (sopa) de goma de tapioca",
        "3 colheres (sopa) de frango desfiado temperado",
        "1 colher (chá) de requeijão light"
      ],
      prepSteps: [
        "Bata o ovo, a clara e a tapioca com uma pitada de sal.",
        "Despeje na frigideira aquecida e asse dos dois lados.",
        "Adicione o recheio de frango com requeijão light, dobre ao meio e doure mais 1 minuto."
      ]
    }
  ]
};

// Dados para o simulador de camadas no pote com macros completos
const SIMULATOR_INGREDIENTS = {
  layer1: [
    { id: "m-citrico", name: "Molho Cítrico de Limão", calories: 35, protein: 0.5, carbs: 2, fat: 3.5, icon: "🍋" },
    { id: "m-caesar", name: "Molho Caesar Fit", calories: 42, protein: 2.5, carbs: 1.5, fat: 3.0, icon: "🧴" },
    { id: "m-bigmac", name: "Molho Especial Big Mac Fit", calories: 48, protein: 2.0, carbs: 3.0, fat: 3.2, icon: "🍔" },
    { id: "m-mostarda", name: "Molho Mostarda e Mel", calories: 45, protein: 0.5, carbs: 6.0, fat: 2.5, icon: "🍯" },
    { id: "m-pesto", name: "Pesto de Manjericão Leve", calories: 50, protein: 1.0, carbs: 1.5, fat: 4.5, icon: "🌿" }
  ],
  layer2: [
    { id: "l-grao-bico", name: "Grão-de-bico Cozido", calories: 45, protein: 3.0, carbs: 8.0, fat: 0.8, icon: "🧆" },
    { id: "l-cenoura", name: "Cenoura Ralada", calories: 15, protein: 0.4, carbs: 3.5, fat: 0.1, icon: "🥕" },
    { id: "l-pepino", name: "Pepino em Cubos", calories: 10, protein: 0.5, carbs: 2.0, fat: 0.1, icon: "🥒" },
    { id: "l-tomate", name: "Tomate Cereja", calories: 15, protein: 0.7, carbs: 3.2, fat: 0.2, icon: "🍅" },
    { id: "l-beterraba", name: "Beterraba Ralada", calories: 20, protein: 0.8, carbs: 4.5, fat: 0.1, icon: "🧅" },
    { id: "l-milho", name: "Milho Verde Cozido", calories: 25, protein: 1.0, carbs: 5.5, fat: 0.4, icon: "🌽" }
  ],
  layer3: [
    { id: "p-frango", name: "Peito de Frango Desfiado", calories: 65, protein: 14.0, carbs: 0.0, fat: 1.2, icon: "🍗" },
    { id: "p-ovo-codorna", name: "Ovos de Codorna Cozidos", calories: 45, protein: 4.0, carbs: 0.3, fat: 3.2, icon: "🥚" },
    { id: "p-muçarela", name: "Muçarela de Búfala", calories: 55, protein: 5.5, carbs: 0.5, fat: 3.8, icon: "🧀" },
    { id: "p-carne-moida", name: "Patinho Moído Grelhado", calories: 75, protein: 15.0, carbs: 0.0, fat: 2.2, icon: "🥩" },
    { id: "p-tofu", name: "Tofu Grelhado em Cubos", calories: 35, protein: 4.2, carbs: 1.0, fat: 2.0, icon: "🧊" }
  ],
  layer4: [
    { id: "c-girassol", name: "Sementes de Girassol", calories: 25, protein: 1.0, carbs: 1.2, fat: 2.2, icon: "🌻" },
    { id: "c-nozes", name: "Nozes Picadas", calories: 30, protein: 0.8, carbs: 0.8, fat: 3.0, icon: "🌰" },
    { id: "c-gergelim", name: "Gergelim Tostado Misto", calories: 20, protein: 0.7, carbs: 0.9, fat: 1.8, icon: "⚪" },
    { id: "c-abobora", name: "Sementes de Abóbora", calories: 25, protein: 1.2, carbs: 0.8, fat: 2.1, icon: "🎃" },
    { id: "c-castanha", name: "Castanha-de-Caju Picada", calories: 32, protein: 1.0, carbs: 1.8, fat: 2.5, icon: "🥜" }
  ],
  layer5: [
    { id: "f-alface-americana", name: "Alface Americana Crocante", calories: 5, protein: 0.5, carbs: 1.0, fat: 0.1, icon: "🥬" },
    { id: "f-rucula", name: "Rúcula Fresca", calories: 4, protein: 0.6, carbs: 0.7, fat: 0.1, icon: "🌱" },
    { id: "f-espinafre", name: "Espinafre Baby", calories: 5, protein: 0.7, carbs: 0.9, fat: 0.1, icon: "🌿" },
    { id: "f-alface-roxa", name: "Alface Roxa", calories: 5, protein: 0.5, carbs: 1.0, fat: 0.1, icon: "🥬" },
    { id: "f-agrião", name: "Agrião Fresco", calories: 4, protein: 0.6, carbs: 0.6, fat: 0.1, icon: "☘️" }
  ]
};
