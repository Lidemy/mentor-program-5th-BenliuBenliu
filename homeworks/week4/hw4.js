const request = require('request')

const CLIENT_ID = '5d9tqtv81o195j0ya010wkrz9aoi8z'
const baseUrl = 'https://api.twitch.tv/kraken'

request({
  url: `${baseUrl}/games/top`,
  method: 'GET',
  headers: {
    'Client-ID': CLIENT_ID,
    Accept: 'application/vnd.twitchtv.v5+json'
  }
}, (err, res, body) => {
  if (err) {
    return console.log(err)
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
  const topGameList = result.top
  for (let i = 0; i < topGameList.length; i++) {
    console.log(`${topGameList[i].viewers}  ${topGameList[i].game.name}`)
  }
}
)
