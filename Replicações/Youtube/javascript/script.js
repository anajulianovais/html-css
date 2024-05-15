let cabecalho_esquerda = document.getElementById('cabecalho-esquerda')
let cabecalhoMenu = document.getElementById('cabecalho-esquerda-menu')
let youtubeLogo = document.getElementById('cabecalho-youtubeLogo')
let btnVoltar = document.getElementById('cabecalho-esquerda-btnVoltar')
let txtPesquisa = document.getElementById('cabecalho-centro-txtPesquisa')
let btnPesquisar = document.getElementById('cabecalho-centro-btnPesquisar')
let modoPesquisa = 0

let varMenuContextualLateral = document.getElementById('menu-contextual-lateral')
let varMenuContextualConfiguracoes = document.getElementById('menu-contextual-configuracoes')
let meuPerfil = document.getElementById('cabecalho-direita-meuPerfil')

document.addEventListener("click", function (event) {
    let target = event.target
    if (!varMenuContextualConfiguracoes.contains(target) && !meuPerfil.contains(target)) {
        varMenuContextualConfiguracoes.style.display = 'none'
    }

    if (!varMenuContextualLateral.contains(target) && !cabecalhoMenu.contains(target)) {
        varMenuContextualLateral.style.display = 'none'
        cabecalho_esquerda.style.visibility = 'visible'
    }
})


function menuContextualLateral() {
    let visibilidade = varMenuContextualLateral.style.display
    if (visibilidade == 'none' || visibilidade == '') {
        varMenuContextualLateral.style.left = '0px'
        varMenuContextualLateral.style.animationName = 'abrindoMenuContextualLateral'
        varMenuContextualLateral.style.display = 'block'
        if (window.innerWidth <= 500) {
            cabecalho_esquerda.style.visibility = 'hidden'
        }
    }

    else {
        varMenuContextualLateral.style.animationName = 'fechandoMenuContextualLateral'
        varMenuContextualLateral.style.left = '-200px'
        setTimeout(function () {
            varMenuContextualLateral.style.display = 'none'
        }, 200)
        cabecalho_esquerda.style.visibility = 'visible'
    }
}

function menuContextualConfiguracoes() {
    let visibilidade = varMenuContextualConfiguracoes.style.display
    let posicao = meuPerfil.getBoundingClientRect()

    if (visibilidade == "none" || visibilidade == '') {
        varMenuContextualConfiguracoes.style.left = `${posicao.left - 265}px`
        varMenuContextualConfiguracoes.style.display = 'block'
    }

    else {
        varMenuContextualConfiguracoes.style.display = 'none'
    }
}

function Pesquisar() {
    if (modoPesquisa == 0 && window.innerWidth <= 500) {
        cabecalho_esquerda.style.visibility = 'hidden'
        cabecalhoMenu.style.visibility = 'hidden'
        youtubeLogo.style.display = 'none'
        btnVoltar.style.display = 'block'
        meuPerfil.style.visibility = 'hidden'

        txtPesquisa.style.display = 'block'
        txtPesquisa.value = ''
        modoPesquisa = 1
    }

    else if (modoPesquisa == 1 && window.innerWidth <= 500) {
        window.open(`https://www.youtube.com/results?search_query=${txtPesquisa.value}`, "_blank");
    }

    else if (window.innerWidth >= 500) {
        window.open(`https://www.youtube.com/results?search_query=${txtPesquisa.value}`, "_blank");
    }
}

function voltarConteudo() {
    if (window.innerWidth <= 500) {
        cabecalho_esquerda.style.visibility = 'visible'
        cabecalhoMenu.style.visibility = 'visible'
        youtubeLogo.style.display = ''
        btnVoltar.style.display = 'none'
        meuPerfil.style.visibility = 'visible'
        txtPesquisa.style.display = 'none'
        txtPesquisa.value = ''
    } else {
        cabecalho_esquerda.style.visibility = 'visible'
        cabecalhoMenu.style.visibility = 'visible'
        youtubeLogo.style.display = ''
        btnVoltar.style.display = 'none'
        meuPerfil.style.visibility = 'visible'
        txtPesquisa.style.display = 'block'
    }

    if (modoPesquisa == 1 && window.innerWidth >= 500) {
        txtPesquisa.value = ''
    }

    modoPesquisa = 0
}


function mudouTamanho() {
    voltarConteudo()
    let visibilidade = varMenuContextualLateral.style.display
    if (window.innerWidth <= 500 && visibilidade == "block") {
        cabecalho_esquerda.style.visibility = 'hidden'
    }

    visibilidade = varMenuContextualConfiguracoes.style.display
    if (visibilidade == 'block') {
        varMenuContextualConfiguracoes.style.display = 'none'
        menuContextualConfiguracoes()
    }
}