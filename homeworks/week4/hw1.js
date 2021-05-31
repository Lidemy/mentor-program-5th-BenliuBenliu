const request = require('request')

const options = 'https://lidemy-book-store.herokuapp.com/books/?_limit=10'

request(options, (err, res, body) => {
  if (err) {
    return console.log('error')
  }

  if (res.statusCode >= 400) {
    return console.log('Something goes wrong,statuscode :', res.statusCode)
  }

  let result = ''
  try {
    result = JSON.parse(body)
  } catch (err) {
    return console.log('Not JSON')
  }

  for (let i = 0; i < result.length; i++) {
    console.log(`${result[i].id}. ${result[i].name}`)
  }
})
