const corazon = document.querySelector('.corazon')

corazon.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('Hola')
  window.location.href = 'carta.html'
})