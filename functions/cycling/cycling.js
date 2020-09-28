const axios = require('axios')

exports.handler = async function(event, context, callback) {
  let headers = {
    'Content-Type': 'application/json'
  }

  if(!process.env.NODE_ENV) {
    headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'
  }

  let token = await getToken()

  let response = await getData(token)

  callback(null, {
    'statusCode': response.code,
    'headers': headers,
    'body': JSON.stringify(response.data)
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
    return res.data
  }).catch(err => {
    return err
  })
}

async function getData(token) {
  return await axios({
    method: 'get',
    url: `${process.env.STRAVA_URL}/athletes/${process.env.STRAVA_ID}/stats`,
    headers: {
      Authorization: `Bearer ${token.access_token}`
    }
  }).then(res => {
    return {
      code: 200,
      data: res.data
    }
  }).catch(err => {
    return {
      code: err.response.status,
      data: err.response.data
    }
  })
}