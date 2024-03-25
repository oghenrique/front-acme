import { getFilmes, getFilme, postFilme } from "./filmes.js"

function criarCard(filme) {
    
    const card = document.createElement('div')
    const titulo = document.createElement('h2')
    titulo.textContent = filme.nome

    const valor = document.createElement('button')
    valor.textContent = filme.valor_unitario
        
    card.append(titulo, valor)

    return card
}

async function preencherContainer(){
    
    const container = document.querySelector('body')
    const filmes = await getFilmes()

    filmes.forEach(filme => {
        const card = criarCard(filme)
        container.appendChild(card)
    })
    
}

preencherContainer()

const filme =  {
        "nome": "Avengers",
        "sinopse": "Loki, o irmão de Thor, ganha acesso ao poder ilimitado do cubo cósmico ao roubá-lo de dentro das instalações da S.H.I.E.L.D. Nick Fury, o diretor desta agência internacional que mantém a paz, logo reúne os únicos super-heróis que serão capazes de defender a Terra de ameaças sem precedentes. Homem de Ferro, Capitão América, Hulk, Thor, Viúva Negra e Gavião Arqueiro formam o time dos sonhos de Fury, mas eles precisam aprender a colocar os egos de lado e agir como um grupo em prol da humanidade.",
        "duracao": "02:35:00",
        "data_lancamento": "2022-08-25",
        "data_relancamento": null,
        "foto_capa": "https://exemplo.com/foto_vale.jpg",
        "valor_unitario": 29.98
      }

postFilme(filme)




console.log(postFilme(filme))