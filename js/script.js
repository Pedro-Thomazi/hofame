// Ativar menu lista

const btnList = document.querySelector('#btnList')
const closeList = document.querySelector('#closeList')
const navbar = document.querySelector('#navbar')

btnList.addEventListener('click', () => {
  navbar.classList.add('active')
  closeList.classList.toggle('active')
})

closeList.addEventListener('click', () => {
  navbar.classList.remove('active')
})

// Ao clicar no link do menu a lista fecha sozinha
const link = [...document.querySelectorAll('.link')]

link.map((item) => {
  item.addEventListener("click", () => {
    navbar.classList.remove('active')
  })
})


// Slide e seus botoes

let cont = 0

const btnPrev = document.querySelector('#btnPrev')
const btnNext = document.querySelector('#btnNext')

document.querySelector('#img1').checked = true

setInterval(function () {
  nextImg()
}, 5000)

const nextImg = () => {
  cont++
  if (cont > 3) {
    cont = 1
  }

  document.querySelector("#img" + cont).checked = true
}

const actionForBtnPrev = () => {
  cont--
  if (cont < 1) {
    cont = 3
  }

  document.querySelector("#img" + cont).checked = true
}

const actionForBtnNext = () => {
  cont++
  if (cont > 3) {
    cont = 1
  }

  document.querySelector("#img" + cont).checked = true
}


btnPrev.addEventListener('click', () => actionForBtnPrev())
btnNext.addEventListener('click', () => actionForBtnNext())


// Ativar Receitas

// Massas
// Calzone de Queijo
const revenue1 = document.querySelector("#revenue1")
const alterDescription = document.querySelector("#alterDescription")
const btnClose = document.querySelector("#btnClose")

btnClose.addEventListener("click", () => {
  alterDescription.innerHTML = "<h2>Receitas</h2>"
})

const revenueCalzone = {
  name: "Calzone de Queijo",
  revenue: `
  <h3>Ingredientes</h3></br>
  <h4>Massa</h4></br>
1 tablete de fermento biológico (15 g)</br>
meia xícara (chá) de água morna</br>
7 xícaras (chá) de farinha de trigo (cerca de 1Kg)</br>
meia xícara (chá) de óleo</br>
2 potes de Iogurte NESTLÉ Natural Integral 170g</br>
2 colheres (chá) de MAGGI Fondor</br></br>
<h4>Recheio</h4></br>
1 xícara (chá) de queijo mozarela ralado grosso</br>
1 xícara (chá) de queijo prato ralado grosso</br>
1 xícara (chá) de peito de peru em cubinhos</br>
1 e meia xícara (chá) de tomate sem pele e sem semente, picado</br>
meia colher (chá) de MAGGI Fondor</br>
1 colher (sopa) de orégano fresco</br>

<h3>Modo de Preparo</h3></br>
<h4>Massa</h4></br>

1.  Em um recipiente, dissolva o fermento na água morna. Reserve.</br></br>

2.  Em uma superfície limpa, coloque a farinha de trigo e faça uma cova no centro para acrescentar o óleo, o Iogurte NESTLÉ, o MAGGI Fondor e o fermento reservado.</br></br>

3.  Misture a massa com as mãos, até ficar elástica e consistente.</br></br>

4.  Cubra a massa e deixe descansar até dobrar de volume. Reserve.
Recheio</br></br>

5.  Em um recipiente, misture bem todos os ingredientes e reserve.
Montagem</br></br>

6.  Quando a massa já tiver dobrado de volume, divida-a em seis pedaços, formando seis bolas.</br></br>

7.  Em uma superfície polvilhada com farinha de trigo e com um rolo, abra cada pedaço de massa em discos de cerca de 0,5 cm de espessura.</br></br>

8.  Coloque um pouco do recheio no centro de cada disco, deixando cerca de 2 cm da borda.</br></br>

9.  Dobre a massa ao meio no formato de meia-lua, feche e aperte com a ponta dos dedos.</br></br>

10.  Em uma assadeira, coloque os calzones, pincele com óleo e leve para assar em forno médio alto (200°C), preaquecido, por cerca de 30 minutos, ou até dourar. Retire do forno e sirva a seguir.</br></br>
  `
}

revenue1.addEventListener("click", () => {
  alterDescription.innerHTML = `
  <h2>${revenueCalzone.name}</h2>
  <p>${revenueCalzone.revenue}</p>
  `
})

// Macarrão
const revenue2 = document.querySelector("#revenue2")

const revenuePasta = {
  name: "Macarrão",
  revenue: `
  <h3>Ingredientes</h3></br>
  
  1 pacote de macarrão tipo espaguete (500g)</br></br>
  2 colheres (sopa) de azeite</br></br>
  5 tomates maduros, sem pele e sem sementes, cortados em pedaços grandes</br></br>
  2 sticks de MAGGI® MEU SEGREDO® 7 VEGETAIS</br></br>
  1 colher (sopa) de manjericão fresco picado</br></br>
  2 colheres (sopa) de queijo parmesão ralado</br></br>

  <h3>Modo de Preparo</h3></br>

1.  Cozinhe o macarrão em água fervente e sal, até que fique 'al dente'.</br></br>

2.  Enquanto isso, em uma panela, aqueça o azeite, adicione os tomates, o MAGGI MEU SEGREDO e refogue ligeiramente. Junte o manjericão e misture.</br></br>

3.  Escorra o macarrão, coloque em um recipiente refratário e adicione o refogado de tomates.</br></br>

4.  Polvilhe o queijo ralado e sirva a seguir.</br></br>
  
  `
}


revenue2.addEventListener("click", () => {
  alterDescription.innerHTML = `
  <h2>${revenuePasta.name}</h2>
  <p>${revenuePasta.revenue}</p>
  `
})

// Pizza
const revenue3 = document.querySelector("#revenue3")

const revenuePizza = {
  name: "Pizza de Pepperoni",
  revenue: `
  <h3>Ingredientes</h3></br>
  <h4>Massa</h4></br></br>
250 g de farinha de trigo</br>
150 ml de água morna</br>
2 colheres de sopa de fermento biológico</br>
1 colher de sopa de açúcar</br>
1/2 colher de sopa de sal</br>
1 colher de sopa de azeite de oliva</br></br>

<h4>Molho</h4></br>
2 dentes de alho</br>
1/2 cebola picada</br>
2 tomates maduros descascados e sem sementes</br>
1/4 copo de água</br>
3 colheres de azeite</br>
1 pitada de açúcar</br>
Salame italiano, finamente fatiado</br>
1/2 pimentão em rodelas</br>
Queijo mussarela em fatias</br>
Pimenta calabresa (opcional)</br></br>

<h3>Modo de Preparo</h3></br>
<h4>Modo de preparo : 1h 30min</h4></br>

<h4>Massa:</h4></br></br>
1 Dilua o fermento, o sal e o açúcar na água morna, conforme instruções da embalagem do fermento.</br></br>
2 Misture com a farinha e mexa com as mãos em uma tigela até formar uma massa consistente.</br></br>
3 Sove bem a massa por aproximadamente 5 minutos.</br></br>
4 Deixe a massa descansar por 40 minutos para que possa crescer.</br></br>
5 Com um rolo de macarrão abra a massa no formato desejado de pizza com a espessura de 0,5 cm.</br></br>
6 Pré-asse no forno a 180°C por 5 minutos.</br></br>

<h4>Molho:</h4></br></br>
7 Bata no processador os tomates com o alho e a cebola.</br></br>

8 Aqueça o azeite em uma panela e refogue os ingredientes processados.</br></br>

9 Após refogar, acrescente a água e a pitada de açúcar e deixe cozinhar até encorpar na consistência desejada.</br></br>

<h4>Montagem:</h4></br></br>
10 Distribua o molho de tomate sobre a massa pré-assada.</br></br>

11 Cubra com queijo mussarela fatiado e distribua por cima as fatias de salame italiano, os pimentões e as cebolas (opcional) em rodela sobre o queijo.</br></br>

12 Salpique com pimenta calabresa.</br></br>

13 Regue com um fio de azeite de oliva extra-virgem e asse no forno bem quente por 12 minutos, ou até dourar o recheio.</br></br>
  `
}


revenue3.addEventListener("click", () => {
  alterDescription.innerHTML = `
  <h2>${revenuePizza.name}</h2>
  <p>${revenuePizza.revenue}</p>
  `
})

// Pizza de Caponata
const revenue4 = document.querySelector("#revenue4")

const revenuePizzaDeCaponata = {
  name: "Pizza de Caponata",
  revenue: `
  <h3>Ingredientes</h3></br>
  <h4>Massa</h4></br></br>
  500g de farinha de trigo</br>
  285g de água</br>
  100g de fermento levain (ou 5g de fermento biológico seco diluído em 50ml de água)</br>
  13g de sal</br>
  13g de azeite</br></br>

  <h4>Recheio</h4></br></br>
  100g de abobrinha fatiada fina</br>
  100g de berinjela fatiada fina</br>
  200g de tomate italiano</br>
  5g de alho</br>
  50g de castanha de caju</br>
  100g de tomilho (só as folhinhas)</br>
  20ml de azeite</br>
  100g de pimentão vermelho assado e descascado</br>
  100g de pimentão amarelo assando e descascado</br>
  15g de pimenta dedo de moça picada</br>
  10g de raspa de limão siciliano</br>
  15ml de suco de limão siciliano</br>
  1 massa a 65% de hidratação</br>
  Sal e azeite a gosto</br></br>

  <h3>Modo de Preparo</h3></br>
  <h4>Massa</h4></br></br>
  1
  Faça a autólise juntando a água com a farinha formando uma bola. Deixe descansar na geladeira por 1 hora.</br></br>
  2
  Junte o levain e passar para a batedeira com o gancho e acrescente todos os outros ingredientes. Bata por pelo menos 20 minutos ou até a massa soltar do gancho.</br></br>
  3
  Transfera para uma tigela grande untada com azeite e deixar descansar fora da geladeira por 2 horas. Divida a massa em porções desejadas.</br></br>
  4
  Faça bolinhas com as porções e deixe descansar por mais 2 horas em tigelas individuais untadas com azeite. Após esse descanso, leve a massa para descansar na geladeira por 12 a 24 horas.</br></br>

  <h3>Modo de Preparo</h3></br>
  <h4>Recheio</h4></br></br>
  1
  Coloque as abobrinhas e a berinjela na assadeira untada com azeite. Regue mais azeite e tempere com sal. Leve a brasa até que fiquem levemente assadas. Depois de esfriar, faça rolinhos com cada uma das fatias. Reserve.</br></br>
  2
  Corte os tomates ao meio e tempere com azeite e sal. Leve ao fogo numa assadeira perfurada para tostar e defumar.</br></br>
  3
  Transfira para uma tábua. Tire as cascas com a mão. Acrescente a eles os pimentões assados. Pique tudo junto grosseiramente. Acrescente a pimenta dedo de moça picada. Tempere com sal e reserve.</br></br>
  4
  Em outra assadeira, coloque as castanhas e o alho para dourar. No processador coloque o tomilho, as castanhas e o alho. Triture bem. Transfira o molho para um bowl e coloque o azeite, as raspas de limão e sal. Reserve.</br></br>
  5
  Abra a massa e monte a pizza com o molho de tomate e os rolinhos de abobrinha e berinjela. Leve para o forno. Quando a pizza sair do forno, finalize com o molho reservado e o suco de limão siciliano.</br></br>
  `
}


revenue4.addEventListener("click", () => {
  alterDescription.innerHTML = `
  <h2>${revenuePizzaDeCaponata.name}</h2>
  <p>${revenuePizzaDeCaponata.revenue}</p>
  `
})

// Doces
// Gelato
const alterDescriptionSweets = document.querySelector("#alterDescriptionSweets")
const btnClose2 = document.querySelector("#btnClose2")

btnClose2.addEventListener("click", () => {
  alterDescriptionSweets.innerHTML = "<h2>Receitas</h2>"
})

const sweetRevenue1 = document.querySelector("#sweetRevenue1")

const sweetRevenueGelato = {
  name: "Gelato",
  revenue: `
  <h3>Ingredientes</h3></br>
  400 ml	Leite</br>
  100 ml	Creme de Leite Fresco</br>
  80 g	Açúcar cristal</br>
  1 colher de chá	Extrato de Baunilha</br>
  Chocolate (opcional)</br></br>

  <h3>Intruções De Preparo</h3></br>
  1 Vamos começar pela mistura do sorvete. Combine o leite e o creme de leite em uma panela. Adicione o açúcar e o extrato de baunilha. Misture.</br></br>

  2 Aqueça a panela em fogo médio. Dissolva o açúcar enquanto mistura com uma espátula. Quando pequenas bolhas começarem a se formar nas bordas da panela, apagar o fogão.</br></br>

  3 Coloque um pote ou tigela sobre água com gelo e coloque a mistura nele. Quando esfriar, coloque a mistura na geladeira por mais de 3 horas.</br></br>

  4 Vamos fazer o gelato. Coloque a mistura numa jarra. Lembre-se de deixar a vasilha da sorveteira no freezer por 8 a 10 horas antes de começar.</br></br>

  5 Tampe e ligue a sorveteira. A seguir, coloque a mistura na máquina.</br></br>

  6 Deixe o misturador ligado por aproximadamente 20 minutos. A pasteurização permite que o gelato fique fresco por mais tempo. Mas se você quiser apreciar o sorvete logo que ele estiver pronto, você pode pular a etapa de aquecimento.</br></br>

  7 E agora o gelato está pronto. Remova a tampa e o misturador. Tire as tigelas de sobremesa do freezer. Molhe o pegador de sorvete e faça algumas bolas.</br></br>

  8 Coloque-os em uma tigela. Por fim, enfeite com chocolate.</br></br>

  <h3>Notas Da Receita</h3></br>
  Se você não tem uma máquita sorveteira, congele a mistura numa travessa, mas misture com uma colher a cada hora. Repita o processo 3 a 4 vezes e você terá um delicioso gelato.</br>
  Evite aquecer demais a mistura ou o delicioso sabor do leite fresco poderá ser perdido.</br>
  `
}


sweetRevenue1.addEventListener("click", () => {
  alterDescriptionSweets.innerHTML = `
  <h2>${sweetRevenueGelato.name}</h2>
  <p>${sweetRevenueGelato.revenue}</p>
  `
})

// Cannoli
const sweetRevenue2 = document.querySelector("#sweetRevenue2")

const sweetRevenueCannoli = {
  name: "Cannoli",
  revenue: `
  <h3>Ingredientes</h3></br>
  2 e ½ de farinha de trigo;</br>
  2 colheres (sopa) de Açúcar;</br>
  1 colher (sopa) cheia de manteiga amolecida;</br>
  1 pitada de sal;</br>
  30ml de cachaça;</br>
  80ml de vinho marsala;</br>
  1 clara;</br>

  </br><h3>Modo de preparo</h3></br>
  1 Para começar a receita de cannoli italiano, misture a farinha de trigo com o açúcar e o sal. Peneire a mistura, acrescente a manteiga e misture novamente.</br></br>
  
  2 Aos poucos adicione o vinho e a cachaça até obter uma massa bem lisa e elástica. Cubra com plástico filme e leve para a geladeira por 1 hora.</br></br>
  
  3 Abra a massa até atingir espessura fina e corte em discos. Depois, pincele as bordas com clara, enrole no formato de canudo e frite-os em óleo quente até dourar.</br></br>
  
  4 Para finalizar os cannoli italiano, preencha os canudos com o recheio de sua preferência, polvilhe com açúcar impalpável e decore com cerejas e damascos.
  Gostou da receita? Conta pra gente nos comentários!</br></br>
  `
}


sweetRevenue2.addEventListener("click", () => {
  alterDescriptionSweets.innerHTML = `
  <h2>${sweetRevenueCannoli.name}</h2>
  <p>${sweetRevenueCannoli.revenue}</p>
  `
})

// Pignoli
const sweetRevenue3 = document.querySelector("#sweetRevenue3")

const sweetRevenuePignoli = {
  name: "Pignoli",
  revenue: `
  <h3>Ingredientes</h3></br>
  1 colher de sopa de açúcar em pó</br>
  1 colher de sopa de açúcar em pó</br>
  Um copo com uma capacidade de 130 ml contendo manteiga ou um copo com uma capacidade de 130 ml contendo margarina, amolecida</br>
  1 (198 - 227 gramas) de pasta de amêndoa (não de maçapão)</br>
  1 ovo</br>
  Uma tigela com capacidade para 1/2 litro contendo pinhões (227 gramas)</br>
  1 colher de sopa de açúcar em pó</br>

  </br><h3>Modo de preparo</h3></br>
  1 Aquecer forno a 350 ° F</br></br>

  2 Spray de folhas de bolinho com spray de cozinha.</br></br>

  3 Em uma tigela grande, bata a mistura de biscoitos, o açúcar granulado, a manteiga, a massa de amêndoa e o ovo com a batedeira elétrica em velocidade baixa até formar uma massa macia.</br></br>

  4 Forma massa em bolas de centímetro; Rolar cada bola em pinhões, pressionando para revestir.</br></br>

  5 Coloque as bolas a 5 centímetros de distância nas folhas de biscoito.</br></br>

  6 Asse 13 a 17 minutos ou até que as bordas fiquem douradas.</br></br>

  7 Cool 5 minutos; remova das folhas de cookie para o rack de resfriamento.</br></br>

  8 Esfrie completamente, cerca de 15 minutos.</br></br>

  9 Antes de servir, polvilhe com açúcar em pó.</br></br>

  `
}


sweetRevenue3.addEventListener("click", () => {
  alterDescriptionSweets.innerHTML = `
  <h2>${sweetRevenuePignoli.name}</h2>
  <p>${sweetRevenuePignoli.revenue}</p>
  `
})

// Tiramisù
const sweetRevenue4 = document.querySelector("#sweetRevenue4")

const sweetRevenueTiramisù = {
  name: "Tiramisù",
  revenue: `
  <h3>Ingredientes</h3></br>
  100 ml de café pronto</br>
  150 gramas de açúcar</br>
  250 gramas de queijo mascarpone</br>
  150 gramas de biscoito champagne</br>
  100 gramas de cacau ou chocolate em pó</br>
  3 ovos</br>

  </br><h3>Modo de preparo</h3></br>
  1 Prepare o café sem adotá-lo e reserve.</br></br>

  2 Bata as gemas na Batedeira Planetária Mondial, usando o batedor de arames com metade do açúcar em velocidade alta, até a mistura ficar esbranquiçada.</br></br>

  3 Adicione o queijo mascarpone e bata em velocidade média.</br></br>

  4 Reserve esse creme.</br></br>

  5 Bata as claras em neve e quando atingir a consistência firme, adicione o restante do açúcar.</br></br>

  6 Deixe bater por 1 minuto.Junte o creme com mascarpone e agora mexa de baixo para cima de forma delicada até incorporar as duas misturas.</br></br>

  7 Para a montagem, molhe o biscoito dos dois lados no café e coloque na travessa,  montando a primeira camada com biscoitos molhados no café.</br></br>

  8 Cubra com o creme espalhando bem e finalize com o cacau ou chocolate em pó polvilhado.</br></br>

  9 Repita as camadas até finalizar os ingredientes, lembrando de fazer a última camada com o creme.</br></br>

  10 Leve para gelar por 2 horas e na hora de servir, polvilhe cacau ou chocolate por cima.</br></br>
  `
}


sweetRevenue4.addEventListener("click", () => {
  alterDescriptionSweets.innerHTML = `
  <h2>${sweetRevenueTiramisù.name}</h2>
  <p>${sweetRevenueTiramisù.revenue}</p>
  `
})



// Ancorar .containerImgs
// Massas
const descriptionPasta = document.querySelector('.descriptionPasta')

let pastasContainer = [...document.querySelectorAll(".pastasContainer")]

pastasContainer.map((item) => {
  item.addEventListener("click", () => {
    alterDescriptionSweets.innerHTML = "<h2>Receitas</h2>"
  })
})


// Doces
const descriptionSweet = document.querySelector('.descriptionSweet')

let containerImgs = [...document.querySelectorAll(".sweetsContainer")]

containerImgs.map((item) => {
  item.addEventListener("click", () => {
    alterDescription.innerHTML = "<h2>Receitas</h2>"
  })
})