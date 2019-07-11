const got = require('got')

const SPOTIFY_API_BASE_URL = 'https://api.spotify.com/v1'
const SPOTIFY_AUTH_URL = 'https://accounts.spotify.com/api/token'

class SpotTrack {
  constructor(clientId, clientSecret) {
    this.clientId = clientId
    this.clientSecret = clientSecret
  }

  async getToken() {
    const resp = await got.post(SPOTIFY_AUTH_URL, {
      auth: `${this.clientId}:${this.clientSecret}`,
      form: true,
      json: true,
      body: { grant_type: 'client_credentials' }
    })
    return resp.body.access_token
  }

  async getTrack(q) {
    var resp
    try {
      const token = await this.getToken()

      resp = await got(`${SPOTIFY_API_BASE_URL}/search`, {
        headers: {
          authorization: `Bearer ${token}`
        },
        query: {
          type: 'track',
          q,
          limit: 1
        },
        json: true
      })
      return resp.body.tracks.items[0].preview_url
    } catch (err) {
      throw new Error(`Something went wrong: ${err}`)
    }
  }
}

module.exports = SpotTrack
