import { getFilmes } from "./filmes.js";

async function criarCard(filme) {
    const container = document.createElement('div');
    container.classList.add('card');

    const cardInner = document.createElement('div');
    cardInner.classList.add('card-inner');

    const cardFront = document.createElement('div');
    cardFront.classList.add('card-front');

    const imagem = document.createElement('img');
    imagem.src = filme.foto_capa;
    imagem.alt = `Poster do filme ${filme.nome}`;
    imagem.style.width = "100%";
    imagem.style.height = "100%";
    imagem.style.borderRadius = "16px";

    cardFront.appendChild(imagem);

    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back');

    const titulo = document.createElement('h5');
    titulo.classList.add('titulo-card');
    titulo.textContent = filme.nome;

    const botaoMais = document.createElement('button');
    botaoMais.classList.add('mais');
    botaoMais.dataset.bsToggle = 'modal';
    botaoMais.dataset.bsTarget = '#modalExemplo';
    botaoMais.innerHTML = '<p>+</p>';

    const valor = document.createElement('h5');
    valor.classList.add('valor-card');
    valor.textContent = `R$${filme.valor_unitario.toFixed(2)}`;

    cardBack.append(titulo, botaoMais, valor);
    cardInner.append(cardFront, cardBack);
    container.appendChild(cardInner);

    cardInner.addEventListener('click', () => {
        cardInner.style.transform = cardInner.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
    });

    botaoMais.addEventListener('click', () => {
        preencherModal(filme);
    });

    return container;
}

async function preencherContainer() {
    const container = document.getElementById('card-container');
    const filmes = await getFilmes();

    filmes.forEach(async filme => {
        const card = await criarCard(filme);
        container.appendChild(card);
    });
}

function preencherModal(filme) {
    const modalTitulo = document.querySelector('.modal-title');
    const modalSinopse = document.querySelector('.sinopse-text');
    const modalDuracao = document.querySelector('.duracao-text');
    const modalLancamento = document.querySelector('.lancamento-text');
    const modalImagem = document.querySelector('.modal-body .poster img');

    modalTitulo.textContent = filme.nome;
    modalSinopse.textContent = filme.sinopse;
    modalDuracao.textContent = filme.duracao;
    modalLancamento.textContent = filme.data_lancamento;
    modalImagem.src = filme.foto_capa;
    modalImagem.alt = `Poster do filme ${filme.nome}`;
}

preencherContainer();
