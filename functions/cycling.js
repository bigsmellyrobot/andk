const axios = require('axios')

exports.handler = async function(event, context, callback) {
  let headers = {
    'Content-Type': 'application/json'
  }

  if(!process.env.NODE_ENV) {
    headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'
  }


  let code = 200

  let token = await getToken()

  let response = await axios({
    'method': 'get',
    'url': `${process.env.STRAVA_URL}/athletes/${process.env.STRAVA_ID}/stats`,
    'headers': {
      'Authorization': `Bearer ${token.access_token}`
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
    'body': JSON.stringify(response)
  })
}

async function getToken() {
  return await axios({
    method: 'post',
    url: `${process.env.STRAVA_URL}/oauth/token`,
    data: {
      client_id: process.env.STRAVA_CLIENT_ID,
      client_secret: process.env.STRAVA_CLIENT_SECRET,
      grant_type: 'refresh_token',
      refresh_token: process.env.STRAVA_REFRESH_TOKEN
    }
  }).then(res => {
    console.log(res.data)
    return res.data
  }).catch(err => {
    console.log(err)
    return err
  })
}