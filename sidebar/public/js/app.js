const toogleButton = document.querySelector('.sidebar-toggle')
const closeMenuButton = document.querySelector('.close-btn')
const sidebar = document.querySelector('.sidebar')


toogleButton.addEventListener('click', event => {
  sidebar.classList.toggle('show-sidebar')  
})

closeMenuButton.addEventListener('click', event => {
  sidebar.classList.remove('show-sidebar')
})