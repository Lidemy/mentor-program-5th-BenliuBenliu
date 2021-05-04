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
  const rounds = lines[0]
  for (let i = 1; i <= rounds; i++) {
    const temp = lines[i].split(' ')
    const aScore = temp[0]
    const bScore = temp[1]
    const compareManner = temp[2]
    console.log(compare(aScore, bScore, compareManner))
  }
}

function compare(a, b, p) {
  if (a === b) return 'DRAW'
  if (p === '1') {
    return bigManner(a, b)
  }
  return smallManner(a, b)
}

function bigManner(a, b) {
  const lengthA = a.length
  const lengthB = b.length
  if (lengthA !== lengthB) {
    return lengthA > lengthB ? 'A' : 'B'
  }
  return a > b ? 'A' : 'B'
}

function smallManner(a, b) {
  const lengthA = a.length
  const lengthB = b.length
  if (lengthA !== lengthB) {
    return lengthA > lengthB ? 'B' : 'A'
  }
  return a > b ? 'B' : 'A'
}
