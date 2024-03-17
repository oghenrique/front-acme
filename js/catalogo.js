'use strict'

document.addEventListener("DOMContentLoaded", function () {
    const card = document.querySelector(".card")

    card.addEventListener("click", function () {
      const cardInner = this.querySelector(".card-inner")
      cardInner.style.transform = cardInner.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)'
    })

    const modalBotao = document.querySelector('.mais')
    modalBotao.addEventListener('click', function () {
      var myModal = new bootstrap.Modal(document.getElementById('modalExemplo'))
      myModal.show()
    })
  })