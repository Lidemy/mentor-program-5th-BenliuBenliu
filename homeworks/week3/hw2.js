const readline = require('readline')

const lines = []
const rl = readline.createInterface({
  input: process.stdin
})

rl.on('line', (line) => {
  lines.push(line)
})

rl.on('close', () => {
  solve(lines)
})

function solve(lines) {
  const line = lines[0].split(' ')
  const min = Number(line[0])
  const max = Number(line[1])
  for (let i = min; i <= max; i++) {
    if (isVaild(i)) {
      console.log(i)
    }
  }
}

function isVaild(n) {
  const strNumber = String(n)
  const strLength = strNumber.length
  let sum = 0
  for (let i = 0; i < strLength; i++) {
    sum += Math.pow(strNumber[i], strLength)
  }
  return n === sum
}
