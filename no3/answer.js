function stringLength(str) {
  return (str.length > 0) ? str : ""
}

function findFirstBracket(str) {
  let indexFirstBracket = str.indexOf('(')
  return indexFirstBracket
}

function findLastBracket(str) {
  let indexLastBracket = str.indexOf(')')
  return indexLastBracket
}

function findStringInBracket(str, indexFirst, indexLast) {
  indexFirst += 1
  return (indexLast >= 0) ? str.substring(indexFirst, indexLast) : ""
}

function getAnswer(str) {
  let word = stringLength(str)
  let indexFirstBracket = findFirstBracket(str)
  let indexLastBracket = findLastBracket(str)
  return (indexFirstBracket >= 0) ? findStringInBracket(word, indexFirstBracket, indexLastBracket) : ""
}


// Test cases
let samples = [
  'marvin',
  '(marvin)',
  '123(marvin)',
  '(marvin)123',
  '()',
  '123()123',
  '(marvin',
  'marvin)',
  '123mar(vin)123',
  '123 (marvin luckianto) 123'
]

let i = 0
samples.forEach(sample => {
  console.log(i, getAnswer(sample));
  i++
});
