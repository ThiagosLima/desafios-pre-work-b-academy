const carsForm = document.querySelector('[data-js="cars-form"')
const carsTable = document.querySelector('[data-js="cars-table"')

carsForm.addEventListener('submit', e => {
  e.preventDefault()

  const carData = {
    image: e.target.image.value,
    model: e.target.model.value,
    year: e.target.year.value,
    licensePlate: e.target['license-plate'].value,
    color: e.target.color.value,
  }

  createRow(carData)
  carsForm.reset()
  e.target.image.focus()
})

function createRow(data) {
  const row = carsTable.insertRow(-1)
  const image = row.insertCell(0)
  const model = row.insertCell(1)
  const year = row.insertCell(2)
  const licensePlate = row.insertCell(3)
  const color = row.insertCell(4)

  const imageTag = document.createElement('img')
  imageTag.src = data.image
  image.appendChild(imageTag)
  model.innerHTML = `${data.model}`
  year.innerHTML = `${data.year}`
  licensePlate.innerHTML = `${data.licensePlate}`
  color.innerHTML = `${data.color}`
}
