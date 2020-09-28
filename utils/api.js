import axios from 'axios'

export default {
  getURL: function() {
    if(process.env.NODE_ENV == 'development') {
      return 'http://localhost:8888/.netlify/functions/'
    } else {
      return '/api/'
    }
  },
  getStravaInfo: async function() {
    return await axios.get(`${this.getURL()}cycling`)
  }
}