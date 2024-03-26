'use strict'

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card")

  cards.forEach(card => {
    card.addEventListener("click", function () {
      const cardInner = card.querySelector(".card-inner")
      cardInner.style.transform = cardInner.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)'
    })
  })

  const modalCloseButton = document.querySelector('.modal-header .btn-close')
  modalCloseButton.addEventListener('click', function () {
    const modalBackdrop = document.querySelector('.modal-backdrop')
    modalBackdrop.remove()
  })

  const modalBotoes = document.querySelectorAll('.mais')
  modalBotoes.forEach(modalBotao => {
    modalBotao.addEventListener('click', function () {
      var myModal = new bootstrap.Modal(document.getElementById('modalExemplo'))
      myModal.show()
    })
  })
})


function searchMovies(value) {
  var cards = document.querySelectorAll('.card')
  cards.forEach(card => {
    var title = card.querySelector('.titulo-card').innerText.toLowerCase()
    if (title.includes(value.toLowerCase())) {
      card.classList.remove('hidden')
    } else {
      card.classList.add('hidden')
    }
  })
}

