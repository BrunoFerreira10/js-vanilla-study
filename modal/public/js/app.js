const btnOpenModal = document.querySelector('.modal-btn')
const btnCloseModal = document.querySelector('.close-btn')
const modalWindow = document.querySelector('.modal-overlay')

btnOpenModal.addEventListener('click', event => {
  modalWindow.classList.add('open-modal')
})

btnCloseModal.addEventListener('click', event => {
  modalWindow.classList.remove('open-modal')
})