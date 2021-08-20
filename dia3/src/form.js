const inputName = document.querySelector('[data-js="name"]')

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
