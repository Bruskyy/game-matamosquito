var altura = 0
var largura = 0
var vidas = 1
var tempo = 15
var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
    criaMosquitoTempo = 1500

} else if (nivel === 'dificil') {
    criaMosquitoTempo = 1000

} else if (nivel === 'impossivel') {
    criaMosquitoTempo = 750
}

function pathingGame() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}

pathingGame()

var cronometro = setInterval(function () {

    tempo -= 1

    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    } else
        document.getElementById('cronometro').innerHTML = tempo

}, 1000)

if (tempo == 9) {
    window.location.href = 'game_over.html'
}

function randomPosition() {

    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        console.log('elemento selecionado foi: v' + vidas)
        if (vidas >= 3) {
            window.location.href = "game_over.html"
        } else {
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'

            vidas++
        }
    }
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    console.log(posicaoX, posicaoY)


    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = randomSize() + ' ' + randomSide()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove()
    }

    document.body.appendChild(mosquito)

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

function kill() {


}