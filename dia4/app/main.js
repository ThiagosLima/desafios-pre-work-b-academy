import './style.css'

const url = 'http://localhost:3333/cars'
// const form = document.querySelector('[data-js="cars-form"]')
const table = document.querySelector('[data-js="cars-table"]')

fetch(url)
  .then(result => result.json())
  .then(result => showCars(result))

function showCars(cars) {
  if (cars.length === 0) {
    const row = table.insertRow(-1)
    row.innerHTML = "Nenhum carro encontrado"
  } else {
    console.log('Existem carros cadastrados')
  }
}
