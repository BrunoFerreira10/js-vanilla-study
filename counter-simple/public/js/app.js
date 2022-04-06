const counterControls = document.querySelectorAll(".btn-counter-control")
const counterValue = document.querySelector('#counter-value')

counterControls.forEach(counterControl => {

  counterControl.addEventListener('click', event => {

    if (event.currentTarget.id == 'btn-decrease')
      counterValue.textContent = Number(counterValue.textContent) - 1

    if (event.currentTarget.id == 'btn-reset')
      counterValue.textContent = 0

    if (event.currentTarget.id == 'btn-increase')
      counterValue.textContent = Number(counterValue.textContent) + 1

    counterValue.classList.remove('counter-bigger')
    counterValue.classList.remove('counter-lower')

    if (Number(counterValue.textContent) > 0)
      counterValue.classList.add('counter-bigger')

    if (Number(counterValue.textContent) < 0)
      counterValue.classList.add('counter-lower')


  })
});

