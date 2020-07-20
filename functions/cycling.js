const axios = require('axios')

const STRAVA_TOKEN = 'bcb54ad8c504281b1d17146ea59f31ed0b24c5b4'
const STRAVA_ID = 18841

exports.handler = async function(event, context, callback) {
  let headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:3000'
  }

  let code = 200

  let response = await axios({
    'method': 'get',
    'url': `https://www.strava.com/api/v3/athletes/${STRAVA_ID}/stats`,
    'headers': {
      'Authorization': `Bearer ${STRAVA_TOKEN}`
    }
  }).then(res => {
    return res.data
  }).catch(err => {
    code = err.response.status
    return err.response.data
  })

  callback(null, {
    'statusCode': code,
    'headers': headers,
    'body': JSON.stringify(event)
  })
}
