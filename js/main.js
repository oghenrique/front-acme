import { getFilmes } from "./filmes.js"
import { tratarData,tratarDuracao } from "./tratamento.js"

async function criarCard(filme) {
    const container = document.createElement('div')
    container.classList.add('card')

    const cardInner = document.createElement('div')
    cardInner.classList.add('card-inner')

    const cardFront = document.createElement('div')
    cardFront.classList.add('card-front')

    const imagem = document.createElement('img')
    imagem.src = filme.foto_capa
    imagem.alt = `Poster do filme ${filme.nome}`
    imagem.style.width = "100%"
    imagem.style.height = "100%"
    imagem.style.borderRadius = "16px"

    cardFront.appendChild(imagem)

    const cardBack = document.createElement('div')
    cardBack.classList.add('card-back')

    const titulo = document.createElement('h5')
    titulo.classList.add('titulo-card')
    titulo.textContent = filme.nome

    const botaoMais = document.createElement('button')
    botaoMais.classList.add('mais')
    botaoMais.innerHTML = '<p>+</p>'
    botaoMais.addEventListener('click', (event) => {
        event.stopPropagation() 
        const modal = criarModal(filme)
        document.body.appendChild(modal)
        var myModal = new bootstrap.Modal(modal)
        myModal.show()
    })

    const valor = document.createElement('h5')
    valor.classList.add('valor-card')
    valor.textContent = `R$${filme.valor_unitario.toFixed(2)}`

    cardBack.append(titulo, botaoMais, valor)
    cardInner.append(cardFront, cardBack)
    container.appendChild(cardInner)

    // Adicionando evento de clique para girar o card
    container.addEventListener('click', () => {
        cardInner.style.transform = cardInner.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)'
    })

    return container
}

async function preencherContainer() {
    const container = document.getElementById('card-container')
    const filmes = await getFilmes()

    filmes.forEach(async filme => {
        const card = await criarCard(filme)
        container.appendChild(card)
    })
}

function criarModal(filme) {
    const modal = document.createElement('div')
    modal.classList.add('modal', 'fade')
    modal.setAttribute('tabindex', '-1')
    modal.setAttribute('aria-labelledby', 'exampleModalLabel')
    modal.setAttribute('aria-hidden', 'true')

    // Conteúdo do modal
    modal.innerHTML = `
        <div class="modal-dialog modal-xl modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="botao-sair">
                        <div class="exit">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    </div>
                    <div class="card-modal mb-4" style="max-width: 90%;">
                        <div class="row g-4">
                            <div class="col-md-4 poster">
                                <img src="${filme.foto_capa}" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-6">
                                <div class="card-body text-white">
                                    <h4 class="card-title text-center fw-bolder">${filme.nome}</h4>
                                    <h4 class="card-sinopse fw-bolder">Sinopse:</h4>
                                    <div class="sinopse-text" style="max-height: 200px; overflow-y: auto; padding-right: 20px;">${filme.sinopse}</div>
                                    <h4 class="card-lancamento fw-bolder" style="margin-top: 10px;">Data de lançamento:</h4>
                                    <p class="lancamento-text">${tratarData(filme.data_lancamento)}</p>
                                    <h4 class="card-duracao fw-bolder">Tempo de duração:</h4>
                                    <p class="duracao-text">${tratarDuracao(filme.duracao)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `

    return modal
}



preencherContainer()
