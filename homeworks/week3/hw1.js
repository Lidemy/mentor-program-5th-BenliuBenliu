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
  let newStr = ''
  for (let i = 1; i <= lines; i++) {
    newStr += '*'
    console.log(newStr)
  }
}
