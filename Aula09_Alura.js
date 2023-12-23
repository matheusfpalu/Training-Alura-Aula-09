var primeiraCartaMatheus = {
  nome: "Ciborgue",
  imagem: "https://i.ytimg.com/vi/q1s7WZR0bU8/maxresdefault.jpg",
  atributos:{
    ataque: 80,
    defesa: 80,
    magia: 0
  }
}

var segundaCartaMatheus = {
  nome: "Patolino Mago",
  imagem: "https://i0.wp.com/www.portallos.com.br/wp-content/uploads/2013/01/Patolino-Mago.jpg?ssl=1",
  atributos: {
    ataque: 60,
    defesa: 30,
    magia: 90
  }
}

var primeiraCartaCarol = {
  nome: "Jett",
  imagem: "https://pbs.twimg.com/media/EUnZMDiVAAABlgv.jpg",
  atributos: {
    ataque: 95,
    defesa: 30,
    magia: 0 
  }
}

var segundaCartaCarol = {
  nome: "Princesa Caroço",
  imagem: "https://static3.tcdn.com.br/img/img_prod/906555/camiseta_hora_de_aventura_princesa_caroco_139_2_20201205134134.jpg",
  atributos: {
    ataque: 60,
    defesa: 20,
    magia: 70
  }
}

var primeiraCartaMae = {
  nome: "Aquaman",
  imagem: "https://ibcdn.canaltech.com.br/fooR0xFuopSi6D_iF-1fqkzm-PY=/0x39:2000x1166/512x288/smart/i345018.jpeg",
  atributos: {
    ataque: 90,
    defesa: 70,
    magia: 30
  }
}

var segundaCartaMae = {
  nome: "Mulher-Maravilha",
  imagem: "https://cinepop.com.br/wp-content/uploads/2021/03/mulher-maravilha-1.jpg",
  atributos: {
    ataque: 80,
    defesa: 100,
    magia: 10
  }
}

var primeiraCartaMarvel = {
  nome: "Wanda",
  imagem: "https://cdn.ome.lt/HjbGHkLthVBGgGMw2asjWRf29pY=/1200x630/smart/extras/conteudos/wanda-head2.jpg",
  atributos: {
    ataque: 90,
    defesa: 60,
    magia: 100
  }
}

var segundaCartaMarvel = {
  nome: "Pantera Negra",
  imagem: "https://boitempoeditorial.files.wordpress.com/2018/02/zizek-pantera-negra-blog.jpg",
  atributos: {
    ataque: 90,
    defesa: 90,
    magia: 0
  }
}

var primeiraCartaOverwatch = {
  nome: "McCree",
  imagem: "https://www.comboinfinito.com.br/principal/wp-content/uploads/2018/11/overwatch-mccree.jpg",
  atributos: {
    ataque: 90,
    defesa: 70,
    magia: 0
  }
}

var segundaCartaOverwatch = {
  nome: "Hanzo",
  imagem: "https://static1-br.millenium.gg/articles/0/51/20/@/90887-screenshot-5-orig-1-article_m-1.jpeg",
  atributos: {
    ataque: 100,
    defesa: 60,
    magia: 10
  }
}

var cartaMaquina
var cartaJogador
var cartas = [primeiraCartaMatheus, segundaCartaMatheus, primeiraCartaCarol, segundaCartaCarol, primeiraCartaMae, segundaCartaMae, primeiraCartaMarvel, segundaCartaMarvel, primeiraCartaOverwatch, segundaCartaOverwatch]

var pontosJogador = 0
var pontosMaquina = 0
atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas() {
  var divQuantidadeCartas = document.getElementById('quantidade-cartas')
  var html = "Quantidade de cartas no jogo: " + cartas.length
  
  divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar() {
  var divPlacar = document.getElementById('placar')
  var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina"
  
  divPlacar.innerHTML = html
}

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
  cartaMaquina = cartas[numeroCartaMaquina]
  cartas.splice(numeroCartaMaquina, 1)
  
  var numeroCartaJogador = parseInt(Math.random() * cartas.length)
  cartaJogador = cartas[numeroCartaJogador]
  cartas.splice(numeroCartaJogador, 1)
  
  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false
  exibeCartaJogador()
}

function exibeCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador")
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
  var opcoesTexto = ""
  
  for (var atributo in cartaJogador.atributos){
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
  }
  var html = "<div id='opcoes' class='carta-status'>"
  
  divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName('atributo')
  for (var i = 0; i < radioAtributo.length; i++){
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value
    }
  }
}

function jogar() {
  var divResultado = document.getElementById("resultado")
  var atributoSelecionado = obtemAtributoSelecionado()
  
  if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
    htmlResultado = '<p class="resultado-final">Parabéns, amigão! Você venceu!!</p>'
    pontosJogador++
  }
  else if(cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
    htmlResultado = '<p class="resultado-final">F, amigão! Você perdeu!</p>'
    pontosMaquina++
  }
  else {
    htmlResultado = '<p class="resultado-final">Oloco amigão, dessa vez passou perto! Empatou!</p>'
  }
  
  if (cartas.length==0){
    alert("É amigão... o jogo acabou!!")
    if (pontosJogador>pontosMaquina){
      htmlResultado = '<p class="resultado-final">Parabéns, amigão! Você ganhou o jogo!</p>'
    }
    else if (pontosJogador<pontosMaquina){
      htmlResultado = '<p class="resultado-final">É, amigão! Não foi dessa vez! Você perdeu o jogo!</p>'     
    }
    else{
      htmlResultado = '<p class="resultado-final">Ah, amigão! No final das contas, pelo menos você empatou o jogo!</p>'   
    }
  }
  else{
    document.getElementById('btnProximaRodada').disabled = false
  }
  
  divResultado.innerHTML = htmlResultado
  document.getElementById('btnJogar').disabled = true
  
  atualizaPlacar()
  exibeCartaMaquina()
  atualizaQuantidadeDeCartas()
}

function exibeCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina")
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
  var opcoesTexto = ""
  
  for (var atributo in cartaMaquina.atributos){
    opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
  }
  var html = "<div id='opcoes' class='carta-status'>"
  
  divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>' 
}

function proximaRodada() {
  var divCartas = document.getElementById('cartas')
  divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
  document.getElementById('btnProximaRodada').disabled = true
  
  var divResultado = document.getElementById('resultado')
  divResultado.innerHTML = ""
}
