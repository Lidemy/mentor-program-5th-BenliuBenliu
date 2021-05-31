const request = require('request')

const basicUrl = 'https://restcountries.eu/rest/v2'
const options = {
  url: `${basicUrl}/name/${process.argv[2]}`
}

request(options, (err, res, body) => {
  if (!process.argv[2]) {
    return console.log('請輸入要查詢的關鍵字')
  }

  if (err) {
    return console.log('error')
  }

  if (res.statusCode === 404) {
    return console.log('找不到相關資訊')
  }

  if (res.statusCode >= 400) {
    return console.log('Something goes wrong,statuscode :', res.statusCode)
  }

  let result = ''
  try {
    result = JSON.parse(body)
  } catch (err) {
    return console.log('NOT JSON')
  }
  for (let i = 0; i < result.length; i++) {
    console.log('============')
    console.log(`國家 : ${result[i].name}`)
    console.log(`首都 : ${result[i].capital}`)
    console.log(`貨幣 : ${result[i].currencies[0].code}`)
    console.log(`國碼 : ${result[i].callingCodes[0]} `)
  }
})
