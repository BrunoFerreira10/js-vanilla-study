const colors = ["green", "red", "rgba(133,122,200)","#f15025"]

const btnIndex = document.getElementById('btn-index')
const color = document.querySelector('.color')

btnIndex.addEventListener('click', () => {
  const randomNumber = getRandomNumber()
  document.body.style.backgroundColor = colors[randomNumber]
  color.textContent = colors[randomNumber]  
})

function getRandomNumber() {
  return Math.floor(Math.random()*colors.length)
}