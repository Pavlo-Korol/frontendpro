const length = parseInt(prompt('Write array length'))
const arr = []

if (length) {
  for (let i = 0; i < length; i++) {
    const arrItem= parseInt(prompt('Write array item'))
    if (arrItem) {
      arr.push(arrItem);
    } else {
      alert('You dont write array item')
    }
  }
} else {
  alert('You dont write array length')
}

console.log(arr)

function compareNumeric(a, b) {
  return a - b;
}

arr.sort(compareNumeric)
console.log(arr)

if (length < 3) {
  console.log('I cant delete items 2,3,4 because you array so short')
} else {
  arr.splice(2,4)
}

console.log(arr)