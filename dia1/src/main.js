import './style.css'

const app = document.querySelector('[data-js="app"]')
const toggle = document.querySelector('[data-js="toggle-app"]')

app.innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`

toggle.addEventListener('click', event => {
  event.preventDefault()

  if (app.style.display === 'none') {
    app.style.display = 'block'
    event.currentTarget.innerHTML = 'Esconder app'
  } else {
    app.style.display = 'none'
    event.currentTarget.innerHTML = 'Mostrar app'
  }
})
