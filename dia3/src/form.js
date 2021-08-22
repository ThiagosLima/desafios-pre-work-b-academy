const inputName = document.querySelector('[data-js="name"]')
const form = document.querySelector('[data-js="form"')

inputName.addEventListener('input', event => {
  event.target.value = formatInput(event.target.value, event.data)
})

function formatInput(totalInput, currentChar) {
  return formatCurrentWord(totalInput) ? formatCurrentWord(totalInput) : formatCurrentChar(totalInput, currentChar)
}

function formatCurrentWord(totalInput) {
  const connectionWords =  ["de", "da", "do", "dos"]
  const words = totalInput.split(' ')
  const currentWord = words[words.length - 1]

  if (connectionWords.includes(currentWord.toLowerCase())) {
    words[words.length - 1] = currentWord.toLowerCase()
    return words.join(' ')
  } else if (currentWord === currentWord.toLowerCase()) {
    words[words.length - 1] = capitalize(currentWord)
    return words.join(' ')
  }
}

function formatCurrentChar(totalInput, currentChar) {
  const lastChar = totalInput[totalInput.length - 2]
  const inputWithoutLastChar = totalInput.substring(0, totalInput.length - 1)

  if (currentChar === null)
    return totalInput
  else if (lastChar === ' ' || lastChar === undefined)
    return inputWithoutLastChar + currentChar.toUpperCase()
  else
    return inputWithoutLastChar + currentChar.toLowerCase()
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

const select = document.createElement('select')
select.setAttribute('multiple', 'multiple')
form.appendChild(select)

const colors = ['CornflowerBlue', 'DarkSeaGreen', 'IndianRed', 'GoldenRod', 'RebeccaPurple']

colors.forEach(color => {
  const option = new Option(color, color)
  select.appendChild(option)
})

const colorsContainer = document.createElement('div')
form.appendChild(colorsContainer)

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
