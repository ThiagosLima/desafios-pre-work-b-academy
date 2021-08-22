import './style.css'

const url = 'http://localhost:3333/cars'
const form = document.querySelector('[data-js="cars-form"]')
const tableBody = document.querySelector('[data-js="table-body"]')
const errorDiv = document.createElement('div')
errorDiv.style.background = 'red'

form.addEventListener('submit', e => {
  e.preventDefault()

  postCar(e.target)
    .then(handleResponse)
    .then(() => getCars())
    .catch(handleError)

  form.reset()
  e.target.image.focus()
})

function getCars() {
  fetch(url)
    .then(result => result.ok && result.json())
    .then(result => showCars(result))
}

function postCar(car) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      image: car.image?.value,
      brandModel: car.model?.value,
      year: car.year?.value,
      plate: car['license-plate']?.value,
      color: car.color?.value,
    })
  })
}

function showCars(cars) {
  if (cars.length === 0) {
    const row = tableBody.insertRow(-1)
    row.innerHTML = "Nenhum carro encontrado"
  } else {
    errorDiv.classList.add('hide')
    tableBody.innerHTML = ''
    cars.forEach(car => createRow(car))
  }
}

function handleResponse(result) {
  if (result.ok)
    return result.json()

  throw result
}

function handleError(error) {
  return error
    .json()
    .then(result => {
      errorDiv.textContent = result.message
      errorDiv.classList.remove('hide')
    })
}

function createRow(data) {
  const row = tableBody.insertRow(-1)
  const image = row.insertCell(0)
  const brandModel = row.insertCell(1)
  const year = row.insertCell(2)
  const plate = row.insertCell(3)
  const color = row.insertCell(4)

  const imageTag = document.createElement('img')
  imageTag.src = data.image
  image.appendChild(imageTag)
  brandModel.innerHTML = `${data.brandModel}`
  year.innerHTML = `${data.year}`
  plate.innerHTML = `${data.plate}`
  color.innerHTML = `${data.color}`
}

form.appendChild(errorDiv)
getCars()
