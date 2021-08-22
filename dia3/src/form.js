const inputName = document.querySelector('[data-js="name"]')
const form = document.querySelector('[data-js="form"')

inputName.addEventListener('input', event => {
  event.target.value = formatWords(event.target.value)
})

function formatWords(input) {
  const words = input.split(' ')
  return words.map(fixCase).join(' ')
}

function fixCase(word) {
  const connectionWords =  ["de", "da", "do", "dos"]

  if (connectionWords.includes(word.toLowerCase()))
    return word.toLowerCase()
  else
    return capitalize(word)
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}

const select = document.createElement('select')
select.setAttribute('multiple', 'multiple')

const colors = ['CornflowerBlue', 'DarkSeaGreen', 'IndianRed', 'GoldenRod', 'RebeccaPurple']

colors.forEach(color => {
  const option = new Option(color, color)
  select.appendChild(option)
})

const colorsContainer = document.createElement('div')

select.addEventListener('change', e => {
  clearColorsContainer()
  const selected = [...e.target.selectedOptions].map(el => el.value)
  selected.forEach(el => createColorDiv(el))
})

function clearColorsContainer() {
  colorsContainer.innerHTML = ''
}

function createColorDiv(color) {
  const div = document.createElement('div')
  div.setAttribute('style', `display:inline-block;height:100px;width:100px;background-color:${color}`)
  colorsContainer.appendChild(div)
}

form.appendChild(select)
form.appendChild(colorsContainer)
