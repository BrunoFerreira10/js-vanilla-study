const toggleButton = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

toggleButton.addEventListener('click', event => {
  // if(links.classList.contains('show-links')){
  //   links.classList.remove('show-links')
  // } else {
  //   links.classList.add('show-links')
  // }
  links.classList.toggle('show-links')
})