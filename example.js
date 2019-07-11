const SpotTrack = require('./index')

const s = new SpotTrack('YOUR_SPOTIFY_CLIENT_ID', 'YOUR_SPOTIFY_CLIENT_SECRET')

async function main() {
  try {
    const track = await s.getTrack('never gonna give')
    console.log(track)
  } catch (err) {
    console.error(err)
  }
}

main()
