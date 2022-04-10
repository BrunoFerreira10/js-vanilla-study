// Using selector inside the element
const questions = document.querySelectorAll('.question')

questions.forEach(question => {
  const btn = question.querySelector('.question-btn')

  btn.addEventListener('click', event => {
    
    questions.forEach(questionOnclick => {         
      if(questionOnclick !== question)
        questionOnclick.classList.remove('show-text')
    })

    question.classList.toggle('show-text')
  })
})


// Selecting parents strategy
// const buttons = document.querySelectorAll('.question-btn')

// buttons.forEach(btn =>{
//   btn.addEventListener('click', event => {
//     event.currentTarget.parentElement.parentElement.classList.toggle('show-text')
//   })
// })

