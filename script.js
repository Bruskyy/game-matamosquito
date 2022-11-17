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
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    console.log(posicaoX, posicaoY)


    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    document.body.appendChild(mosquito)
    mosquito.className = randomSize() + ' ' + randomSide()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'

}

function randomSize() {

    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosquito'
        case 1:
            return 'mosquito1'
        case 2:
            return 'mosquito2'

    }
}

function randomSide() {

    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'

    }
}