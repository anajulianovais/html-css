let cabecalho_esquerda = document.getElementById('cabecalho-esquerda')
let cabecalhoMenu = document.getElementById('cabecalho-esquerda-menu')
let cabecalhoYoutubeLogo = document.getElementById('cabecalho-youtubeLogo')
let btnVoltar = document.getElementById('cabecalho-esquerda-btnVoltar')
let txtPesquisa = document.getElementById('cabecalho-centro-txtPesquisa')
let btnPesquisar = document.getElementById('cabecalho-centro-btnPesquisar')
let modoPesquisa = 0

let varMenuContextualLateral = document.getElementById('menu-contextual-lateral')
let overlay = document.getElementById('overlay')

let varMenuContextualConfiguracoes = document.getElementById('menu-contextual-configuracoes')
let meuPerfil = document.getElementById('cabecalho-direita-meuPerfil')

let btnMaisAcoes = document.getElementById('audiovisual-acoes-direita-btnMaisAcoes')
let maisAcoes = document.getElementById('audiovisual-acoes-direita-maisAcoes')

document.addEventListener("click", function (event) {
    let target = event.target

    if (!varMenuContextualConfiguracoes.contains(target) && !meuPerfil.contains(target)) {
        varMenuContextualConfiguracoes.style.display = 'none'
    }

    if (!varMenuContextualLateral.contains(target) && !cabecalhoMenu.contains(target)) {
        varMenuContextualLateral.style.visibility = 'hidden'
        overlay.style.visibility = 'hidden'
        cabecalho_esquerda.style.visibility = 'visible'
    }

    if (!btnMaisAcoes.contains(target) && !maisAcoes.contains(target)) {
        maisAcoes.style.visibility = 'hidden'
    }
})

function Pesquisar() {
    if (modoPesquisa == 0 && window.innerWidth <= 547) {
        cabecalho_esquerda.style.visibility = 'hidden'
        cabecalhoMenu.style.visibility = 'hidden'
        cabecalhoYoutubeLogo.style.display = 'none'
        btnVoltar.style.display = 'block'
        meuPerfil.style.visibility = 'hidden'

        txtPesquisa.style.display = 'block'
        txtPesquisa.value = ''
        modoPesquisa = 1
    }

    else if (modoPesquisa == 1 && window.innerWidth <= 547) {
        window.open(`https://www.youtube.com/results?search_query=${txtPesquisa.value}`, "_blank");
    }

    else if (window.innerWidth >= 547) {
        window.open(`https://www.youtube.com/results?search_query=${txtPesquisa.value}`, "_blank");
    }
}

function voltarConteudo() {
        if (window.innerWidth <= 547) {
            cabecalho_esquerda.style.visibility = 'visible'
            cabecalhoMenu.style.visibility = 'visible'
            cabecalhoYoutubeLogo.style.display = ''
            btnVoltar.style.display = 'none'
            meuPerfil.style.visibility = 'visible'
            txtPesquisa.style.display = 'none'
            txtPesquisa.value = ''
        } else {
            cabecalho_esquerda.style.visibility = 'visible'
            cabecalhoMenu.style.visibility = 'visible'
            cabecalhoYoutubeLogo.style.display = ''
            btnVoltar.style.display = 'none'
            meuPerfil.style.visibility = 'visible'
            txtPesquisa.style.display = 'block'
        }

        if (modoPesquisa == 1 && window.innerWidth >= 547) {
            txtPesquisa.value = ''
        }
        
        modoPesquisa = 0  
}

function menuContextualLateral() {
    let visibilidade = varMenuContextualLateral.style.visibility

    if (visibilidade == "hidden" || visibilidade == '') {
        varMenuContextualLateral.style.visibility = 'visible'
        overlay.style.visibility = 'visible'
        if (window.innerWidth <= 547) {
            cabecalho_esquerda.style.visibility = 'hidden'
        }
    }

    else {
        varMenuContextualLateral.style.visibility = 'hidden'
        overlay.style.visibility = 'hidden'
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

function mostrarMaisAcoes() {
    let visibilidade = maisAcoes.style.visibility
    let posicao = btnMaisAcoes.getBoundingClientRect()

    if (visibilidade == "hidden" || visibilidade == '') {
        maisAcoes.style.top = `${posicao.top + 50}px`
        maisAcoes.style.left = `${posicao.left - 50}px`
        maisAcoes.style.visibility = 'visible'
    }

    else {
        maisAcoes.style.visibility = 'hidden'
    }
}

function exibicaoDescricao() {
    let descricaoCompleta = document.getElementById('audiovisual-descricao-completa')
    let btnExibicaoDescricao = document.getElementById('audiovisual-descricao-btnExibicaoDescricao')

    if (btnExibicaoDescricao.innerText == 'Mostrar mais') {
        descricaoCompleta.style.display = 'inline'
        btnExibicaoDescricao.innerText = 'Mostrar menos'
    }

    else if (btnExibicaoDescricao.innerText == 'Mostrar menos') {
        descricaoCompleta.style.display = 'none'
        btnExibicaoDescricao.innerText = 'Mostrar mais'
    }
}


function mudouTamanho() {
    voltarConteudo()
    let visibilidade = varMenuContextualLateral.style.visibility

    if (window.innerWidth <= 547 && visibilidade == "visible") {
        cabecalho_esquerda.style.visibility = 'hidden'
    }

    visibilidade = varMenuContextualConfiguracoes.style.display
    if (visibilidade == 'block') {
        varMenuContextualConfiguracoes.style.display = 'none'
        menuContextualConfiguracoes()
    }

    visibilidade = maisAcoes.style.visibility
    if (window.innerWidth <= 547 && visibilidade == 'visible') {
        maisAcoes.style.visibility = 'hidden'
        mostrarMaisAcoes()
    }
    else {
        maisAcoes.style.visibility = 'hidden'
    }
}
