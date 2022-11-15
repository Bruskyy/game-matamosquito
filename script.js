document.getElementsByTagName('html')[0].style.cursor = "url('imagens/mata_mosca.png'), auto";

var altura = 0
var largura = 0

function pathingGame() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}

pathingGame()

function randomPosition() {
    var posicaoX = Math.floor(Math.random() * largura)
    var posicaoY = Math.floor(Math.random() * altura)
    console.log(posicaoX, posicaoY)

    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    document.body.appendChild(mosquito)
    mosquito.className = 'mosquito'
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
}